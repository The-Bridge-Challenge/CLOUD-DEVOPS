# Usa la imagen oficial de Python de Alpine
FROM python:3.9-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app/src

# Copia los archivos actuales en el contenedor en /app
COPY ./app/requirements.txt requirements.txt

COPY . .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto 5050
EXPOSE 5050

# Define el comando por defecto para ejecutar tu aplicación
CMD ["python", "app_candela.py"]

