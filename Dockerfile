FROM node:16-alpine

WORKDIR /usr/src/next

COPY . /usr/src/next

RUN yarn 

# COPY . /usr/src/next

RUN yarn build

CMD [ "yarn" , "run" , "dev"]
