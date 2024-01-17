FROM node:18-alpine
WORKDIR /app
COPY ./client ./client
RUN cd client && npm install
EXPOSE 8080
CMD ["sh", "-c", "cd client && npm run dev -- --port 8080 --host 0.0.0.0"]
