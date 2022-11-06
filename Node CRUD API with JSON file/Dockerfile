FROM node:latest

WORKDIR /usr/scr/app

COPY package*.json /usr/scr/app/

RUN npm i

COPY . /usr/scr/app/

CMD ["node", "server.js"]