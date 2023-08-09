FROM node:20-alpine
WORKDIR /home/node/app
RUN npm install -g @nestjs/cli
COPY package.json ./
RUN npm install --force
COPY . .
EXPOSE 80
CMD ["npm", "run", "start:dev"]
