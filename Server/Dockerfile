# Utilizar la imagen base de Node.js 14
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código del servidor al directorio de trabajo
COPY . .

# Instalar las dependencias del servidor
RUN cd server && npm install

# Iniciar el servidor
CMD ["sh", "-c", "cd server && npm start"]
