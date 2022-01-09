FROM node:14

WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm config set unsafe-perm true
RUN npm install
RUN npm run build



FROM node:14
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /app/dist .
EXPOSE 8000
CMD NODE_URLS=http://*:$PORT npm start


