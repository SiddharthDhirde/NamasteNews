ARG NODE_VERSION=20.12.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile
# RUN npm install

COPY . .

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

# This step builds the Next.js application
RUN yarn build  

EXPOSE 3000

CMD ["yarn", "start"]
# CMD npm start

# for development (watch/sync):-
# CMD ["yarn", "dev"]