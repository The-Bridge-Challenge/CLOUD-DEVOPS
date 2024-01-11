FROM node:18-alpine
WORKDIR /app
COPY ./server ./server
RUN cd server && npm install
EXPOSE 8080
CMD ["sh", "-c", "cd server && npm start"]

#docker build -t [nombre de la imagen a generar]:[tag version] .    <- importante el punto, es el path de ejecucion

#docker run --name postgres-db -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
