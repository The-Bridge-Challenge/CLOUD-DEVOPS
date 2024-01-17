FROM node:18-alpine
WORKDIR /app
COPY ./server ./server
RUN cd server && npm install
EXPOSE 8080
CMD ["sh", "-c", "cd server && npm start"]