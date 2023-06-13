# Copyright (c) 2023 Anuj S
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

FROM node:18.10-alpine3.15

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

# RUN npm run build
RUN npm run build

CMD ["serve", "-s", "build"]
