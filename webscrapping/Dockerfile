# Usa la imagen oficial de Python de Alpine
FROM python:3.9-alpine

# Establece el directorio de trabajo en /app/src
WORKDIR /app/src

# Copia solo el archivo requirements.txt al contenedor en /app/src
COPY ./app/requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia los archivos restantes al contenedor en /app/src
COPY . .

# Expone el puerto 5050
EXPOSE 5050

# Define el comando por defecto para ejecutar tu aplicación
CMD ["python", "app_candela.py"]

