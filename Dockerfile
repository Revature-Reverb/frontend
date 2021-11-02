FROM node:lts-slim

COPY . .

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]