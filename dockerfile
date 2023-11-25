FROM node:14-alpine

WORKDIR /dist/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:dev"]

