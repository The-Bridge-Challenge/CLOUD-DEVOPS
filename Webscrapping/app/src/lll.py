import os
import json
import requests
import time
import pandas as pd
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from sqlalchemy import create_engine
from dotenv import load_dotenv

def scrape_cups(request):
    load_dotenv()
    password_candela = os.getenv('PASSWORD_CANDELA')
    usuario_candela = os.getenv('USUARIO_CANDELA')
    servidor = os.getenv('SERVIDOR')

    if request.method == 'POST':
        request_json = request.get_json()
        if not request_json or 'cups' not in request_json:
            return jsonify({'error': 'Se esperaba un archivo JSON con una clave "cups"'}), 400

        cups = request_json['cups']

        # Inicializar el driver con las opciones configuradas
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.binary = '/usr/bin/google-chrome'
        driver = webdriver.Chrome(options=chrome_options)

        try:
            # Acceder al sitio de Candela
            driver.get('https://agentes.candelaenergia.es/#/login')
            assert "Candela"

            # Aumentar el tiempo de espera si es necesario
            time.sleep(5)

            # Introducir las credenciales de usuario
            usuario_input = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.NAME, 'username'))
            )
            usuario_input.send_keys(usuario_candela)

            password_input = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.NAME, 'password'))
            )
            password_input.send_keys(password_candela)

            # Hacer clic en el botón de inicio de sesión
            boton_iniciar_sesion = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, '//button[@type="submit"]'))
            )
            boton_iniciar_sesion.click()

            # Aumentar el tiempo de espera si es necesario
            time.sleep(5)

            # Buscar los datos de los CUPS
            for cup in cups:
                buscar_cup = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, f'search-input-{cup}'))
                )
                buscar_cup.click()
                buscar_cup.send_keys(cup)
                time.sleep(1)

                # Hacer clic en el botón de búsqueda
                boton_buscar = WebDriverWait(driver, 10).until(
                    EC.element_to_be_clickable((By.XPATH, f'//button[@id="search-button-{cup}"]'))
                )
                boton_buscar.click()

                # Aumentar el tiempo de espera si es necesario
                time.sleep(5)

                # Obtener los datos de la tabla
                tabla = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.ID, f'contract-table-{cup}'))
                )
                tabla_html = tabla.get_attribute('outerHTML')

                # Cerrar la pestaña actual
                driver.close()

                # Cambiar al tab anterior
                driver.switch_to.window(driver.window_handles[0])

                # Parsear la tabla con BeautifulSoup
                soup = BeautifulSoup(tabla_html, 'html.parser')
                filas = soup.find_all('tr')

                # Inicializar el DataFrame
                df_cup = pd.DataFrame(columns=['cups', 'potencia', 'precio'])

                # Agregar los datos a DataFrame
                for fila in filas:
                    columna = fila.find_all('td')
                    if columna:
                        df_cup = df_cup.append({
                            'cups': cup,
                            'potencia': int(columna[0].text),
                            'precio': float(columna[1].text)
                        }, ignore_index=True)

                # Devolver el DataFrame
                if cup == cups[0]:
                    df = df_cup
                else:
                    df = pd.concat([df, df_cup], ignore_index=True)

        except Exception as e:
            print(f'Error al scrapear los datos: {str(e)}')
            driver.quit()
            return jsonify({'error': f'Error al scrapear los datos: {str(e)}'}), 500

        driver.quit()

        # Convertir las columnas a los tipos deseados
        df = df.astype({'potencia': int, 'precio': float})

        # Insertar los datos en la base de datos
        try:
            # Crea la cadena de conexión a la base de datos
            cadena_conexion = f'mysql+pymysql://{usuario_candela}:{password_candela}@{servidor}/candela_db'

            # Crea el motor de base de datos
                        # Crea el motor de base de datos
            motor = create_engine(cadena_conexion)

            # Crea una conexión a la base de datos
            conexion = motor.connect()

            # Crea un cursor para ejecutar consultas SQL
            cursor = conexion.cursor()

            # Inserta los datos en la tabla
            for index, row in df.iterrows():
                cursor.execute('''
                    INSERT INTO cups (cups, potencia, precio)
                    VALUES (%s, %s, %s);
                ''', (row['cups'], row['potencia'], row['precio']))

            # Confirma los cambios en la base de datos
            conexion.commit()

            # Cierra el cursor y la conexión
            cursor.close()
            conexion.close()

            # Devuelve el DataFrame como JSON
            return jsonify(df.to_dict('records'))
        except Exception as e:
                    return jsonify({'error': 'Solo se admiten solicitudes POST'}), 405