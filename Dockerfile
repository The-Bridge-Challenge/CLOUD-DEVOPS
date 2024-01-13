# Usa la imagen oficial de Python de Alpine
FROM python:3.9-alpine

RUN apk --no-cache add build-base

# Establece el directorio de trabajo en /app
WORKDIR /app/src

# Actualiza Pip y Setuptools
RUN pip install --no-cache-dir --upgrade pip setuptools

# Instala las dependencias de desarrollo necesarias
RUN apk add --no-cache build-base

# Copia solo el archivo requirements.txt primero para aprovechar la caché de Docker
COPY app/requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia los archivos actuales en el contenedor en /app
COPY . .

# Ajustes específicos de NumPy
RUN pip install --no-cache-dir numpy==1.19.3

# Expone el puerto 5050
EXPOSE 8080

# Define el comando por defecto para ejecutar tu aplicación
CMD ["python", "app_candela.py"]


