FROM node:18-alpine3.16 as build-stage
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
ARG RAK
ARG RAH
ENV REACT_APP_KEY=RAK
ENV REACT_APP_HOST=RAH

FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html