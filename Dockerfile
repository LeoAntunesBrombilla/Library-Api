FROM node:14
WORKDIR /src
COPY . .
RUN npm install --only=prod
EXPOSE 8000
CMD NODE_URLS=http://*:$PORT npm start