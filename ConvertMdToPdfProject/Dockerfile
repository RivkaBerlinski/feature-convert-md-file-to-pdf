FROM node:16.19.1-buster

RUN npm install -g markdown-pdf

WORKDIR /ConvertMdToPdfProject

COPY ./index.js .

COPY ./mydocument.md .

CMD ["npm", "start"]