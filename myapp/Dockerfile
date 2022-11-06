FROM node:latest

WORKDIR /usr/scr/app/frontend

COPY package*.json /usr/scr/app/frontend

RUN npm i

COPY . /usr/scr/app/frontend

CMD ["npm", "start"]