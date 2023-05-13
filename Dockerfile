FROM nginx:alpine As development

RUN apk update

RUN apk add npm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:alpine as production

RUN apk update

COPY --from=development /usr/src/app/build /etc/app
COPY --from=development /usr/src/app/ngnix-config/default.conf /etc/nginx/conf.d/
