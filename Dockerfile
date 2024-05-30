#node version
FROM node:18-alpine as wallet
#container directory
WORKDIR /app
COPY . .
#COPY package*.json ./
#run the npm install commands and angular cli commands also.
RUN npm install
#Build Angular application in PROD mode
RUN npm run build
#define the front end server to route the front end data to the backend logics. html -> ts file
FROM httpd:alpine3.15
WORKDIR /usr/local/apache2/htdocs
COPY --from=wallet /app/dist/wallet-app-h2 .
#EXPOSE 4200
#CMD ["npm", "start"]
