FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --frozen-lockfile

ENV NODE_ENV production
ENV NODE_ENV $NODE_ENV

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
