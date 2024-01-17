FROM node:18-alpine
WORKDIR /app
COPY ./client ./client
RUN cd client && npm install
COPY ./hardening ./hardening
EXPOSE 8080
CMD ["sh", "-c", "cd client && npm run dev -- --port 8080 --host 0.0.0.0 && cd .. && cd hardening && chmod +x hardening.sh && bash hardening.sh"]
