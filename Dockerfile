FROM node:16-alpine as build
WORKDIR /src/app
COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /src/app/build /var/www/vk_test/html
COPY nginx.conf /etc/nginx/conf.d/default.conf