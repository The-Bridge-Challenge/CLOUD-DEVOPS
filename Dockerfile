FROM python:3.9-alpine
RUN apk --no-cache add build-base
WORKDIR /app
RUN pip install --no-cache-dir --upgrade pip setuptools
RUN apk add --no-cache build-base
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY ./app ./app
RUN pip install --no-cache-dir numpy==1.19.3
EXPOSE 8080
CMD ["python", "app_candela.py"]



