# app.py

from flask import Flask, render_template, request, jsonify
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup as bs
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
import pandas as pd
from sqlalchemy.exc import SQLAlchemyError
import chromedriver_autoinstaller
import time

load_dotenv()
password_candela = os.getenv('PASSWORD_CANDELA')
usuario_candela = os.getenv('USUARIO_CANDELA')
servidor = os.getenv('SERVIDOR')

app = Flask(__name__)
app.config['DEBUG'] = True

# Instala automáticamente la versión correcta de chromedriver
chromedriver_autoinstaller.install()

# Ruta al ejecutable de Google Chrome en Docker
chrome_path = '/usr/bin/google-chrome'

# Crea las opciones del navegador
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = chrome_path
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")

columnas_a_convertir = ['consumo_anual', 'ca_p1', 'ca_p2', 'ca_p3', 'ca_p4', 'ca_p5', 'ca_p6']

def insertar_datos(df):
    try:
        connect = servidor
        engine = create_engine(connect)
        df.to_sql(name="sips", con=engine, if_exists="append", index=False)
        return "Datos Ingestados"
    
    except SQLAlchemyError as e:
        error_message = f"Error al insertar datos en la base de datos: {str(e)}"
        return error_message

def convertir_df(df, columnas):
    try:
        for columna in columnas:
            # Eliminar 'KWh' y convertir a flotante
            df[columna] = df[columna].str.replace('.', '')
            df[columna] = df[columna].str.replace(',', '.')
            df[columna] = df[columna].str.replace('KWh', '').astype(float)
        return df, None
    
    except Exception as e:
        error_message = f"Error al convertir el DataFrame: {str(e)}"
        return None, error_message

def webscrape(CUPS):
    # Inicializar el driver con las opciones configuradas
    driver = webdriver.Chrome(options=chrome_options)

    try:
        # Acceder al sitio de Candela
        driver.get('https://agentes.candelaenergia.es/#/login')
        assert "Candela"

        # Aumentar el tiempo de espera si es necesario
        time.sleep(5)

        loadMore = driver.find_element(By.XPATH, '//*[@id="select_1"]')
        loadMore.click()
        time.sleep(3)

        loadMore = driver.find_element(By.XPATH, '//*[@id="select_option_3"]/div[1]')
        loadMore.click()
        time.sleep(5)

        user_box = driver.find_element(By.XPATH, '//*[@id="contenedor"]/div/div/div/div[1]/div/form/div[1]/div[2]/input')
        user_box.send_keys(usuario_candela)
        time.sleep(5)

        pass_box = driver.find_element(By.XPATH, '//*[@id="contenedor"]/div/div/div/div[1]/div/form/div[1]/div[3]/input')
        pass_box.send_keys(password_candela)
        time.sleep(5)

        loadMore = driver.find_element(By.XPATH, '//*[@id="contenedor"]/div/div/div/div[1]/div/form/button')
        loadMore.click()
        time.sleep(5)

        time.sleep(8)
        sips = driver.find_element(By.XPATH, '/html/body/div[1]/div/div/div/div[1]/ul/li[3]/a/span[2]')
        sips.click()

        # Espera hasta que se encuentre el elemento cups_box
        cups_box = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="input_6"]'))
        )
        cups_box.send_keys(CUPS)
        time.sleep(2)

        consult = driver.find_element(By.XPATH, '//*[@id="tab-content-5"]/div/md-card/div/form/div[4]/button/span')
        consult.click()

        # Esperar a que la página cargue completamente
        time.sleep(10)

        html = driver.page_source
        soup = bs(html, 'html.parser')
        time.sleep(30)

        # Asigna valores a las variables
        tarifa = soup.find_all('any', {'ng-switch-when': '018', 'class': 'ng-scope'})
        datos_t = [elemento.text for elemento in tarifa]

        # Consumo Anual
        consumo_anual = soup.find_all('td', {'ng-show': "MostrarSipsConsumoAnual && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_ca = [elemento.text.strip() for elemento in consumo_anual]

        # Consumo Anual P1
        consumo_p1 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP1 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p1 = [elemento.text.strip() for elemento in consumo_p1]

        # Consumo Anual P2
        consumo_p2 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP2 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p2 = [elemento.text.strip() for elemento in consumo_p2]

        # Consumo Anual P3
        consumo_p3 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP3 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p3 = [elemento.text.strip() for elemento in consumo_p3]

        # Consumo Anual P4
        consumo_p4 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP4 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p4 = [elemento.text.strip() for elemento in consumo_p4]

        # Consumo Anual P5
        consumo_p5 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP5 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p5 = [elemento.text.strip() for elemento in consumo_p5]

        # Consumo Anual P6
        consumo_p6 = soup.find_all('td', {'ng-show': "MostrarSipsConsumoP6 && VerEnergia", 'nowrap': 'nowrap', 'class': 'md-cell ng-binding'})
        datos_p6 = [elemento.text.strip() for elemento in consumo_p6]

        # CUPS
        cups = soup.find('td', {'ng-show': "MostrarSipsCups", 'class': 'md-cell ng-binding'})
        dato_cups = cups.text.strip() if cups else None

        # Municipio
        municipio = soup.find('td', {'ng-show': "MostrarSipsMunicipio", 'class': 'md-cell ng-binding'})
        dato_municipio = municipio.text.strip() if municipio else None

        # Provincia
        provincia = soup.find('td', {'ng-show': "MostrarSipsProvincia", 'class': 'md-cell ng-binding'})
        dato_provincia = provincia.text.strip() if provincia else None

        # Codigo_postal
        codigo_postal = soup.find('td', {'ng-show': "MostrarSipsCodigoPostal", 'class': 'md-cell ng-binding'})
        dato_codigo_postal = codigo_postal.text.strip() if codigo_postal else None

        # CIA_actual
        distribuidora_actual = soup.find('td', {'ng-show': "MostrarSipsDistribuidora", 'class': 'md-cell ng-binding'})
        dato_distribuidora_actual = distribuidora_actual.text.strip() if distribuidora_actual else None

        df = pd.DataFrame({
            'tarifa': datos_t,
            'consumo_anual': datos_ca,
            'ca_p1': datos_p1,
            'ca_p2': datos_p2,
            'ca_p3': datos_p3,
            'ca_p4': datos_p4,
            'ca_p5': datos_p5,
            'ca_p6': datos_p6,
            'cups': dato_cups,
            'municipio': dato_municipio,
            'provincia': dato_provincia,
            'codigo_postal': dato_codigo_postal,
            'distribuidora_actual': dato_distribuidora_actual
        })

    except Exception as e:
        # Imprimir el error y devolver None
        print(f"Error en webscrape: {str(e)}")
        df = None

    finally:
        # Asegúrate de cerrar el navegador después de su uso
        driver.quit()

    return df

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    print("Entrando a la ruta /result")
    cups = request.form.get('cups')
    print(f"Valor de cups: {cups}")
    df = webscrape(cups)
    
    if df is not None:
        df, mensaje_error = convertir_df(df, columnas_a_convertir)
        if df is not None:
            insertar_resultado = insertar_datos(df)
            if insertar_resultado == "Datos Ingestados":
                mensaje = 'Datos ingresados correctamente'
            else:
                mensaje = f'Error al insertar datos en la base de datos: {insertar_resultado}'
        else:
            mensaje = f'Error al convertir el DataFrame: {mensaje_error}'
    else:
        mensaje = 'No se obtuvieron datos para el CUPS proporcionado'

    return jsonify({'mensaje': mensaje, 'cups': cups})

@app.route('/datos/<cups>', methods=['GET'])
def obtener_datos(cups):
    engine = create_engine(servidor)
    query = "SELECT * FROM sips WHERE cups = %(cups)s"
    df = pd.read_sql(query, engine, params={'cups': cups})

    if df.empty:
        return jsonify({"error": "No se encontraron datos para el CUPS proporcionado"}), 404
    else:
        return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0')


