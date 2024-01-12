# Usa la imagen oficial de Python en Alpine
FROM python:3.9-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos actuales en el contenedor en /app
COPY . /app

# Instala las dependencias
RUN apk add --no-cache build-base \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del build-base

# Expone el puerto 5050
EXPOSE 5050

# Define el comando por defecto para ejecutar tu aplicación
CMD ["python", "app_candela.py"]
