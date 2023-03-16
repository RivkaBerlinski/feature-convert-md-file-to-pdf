FROM node:16.19.1-buster

COPY package*.json ./

RUN npm install

COPY ./index.js .

COPY ./mydocument.md .

CMD ["npm", "start"]