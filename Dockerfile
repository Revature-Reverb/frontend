FROM node:16-alpine

COPY . .

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]