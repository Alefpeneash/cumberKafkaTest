FROM node:8.9.0-alpine
WORKDIR /web
COPY package.json ./
RUN npm install
RUN mkdir /features
RUN mkdir /src
COPY src ./src
COPY features ./features
EXPOSE 9092
EXPOSE 2181
EXPOSE 8080
CMD ["npm", "run", "dev"]
# CMD ["ifconfig"]