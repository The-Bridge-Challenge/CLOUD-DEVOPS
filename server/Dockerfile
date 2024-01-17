FROM node:18-alpine
WORKDIR /app
COPY ./Server ./server
RUN cd server && npm install
COPY ./hardening ./hardening
EXPOSE 8080
CMD ["sh", "-c", "cd server && npm start cd .. && cd hardening && chmod +x hardening.sh && bash hardening.sh"]