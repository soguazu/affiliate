FROM node:12

WORKDIR /app

COPY ["package.json", "yarn-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN yarn install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

RUN yarn add -D nodemon

CMD yarn start serve