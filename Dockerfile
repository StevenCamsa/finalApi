
FROM node:14-alpine
WORKDIR /api
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/
#RUN npm config set http-proxy http://172.16.1.6:3128
#RUN npm config set https-proxy http://172.16.1.6:3128
#RUN npm config set proxy http://172.16.1.6:3128

RUN npm install
COPY . .

CMD [ "npm", "start"]
