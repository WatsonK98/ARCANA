FROM node:22-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm install
RUN npx next dev
COPY . .
CMD ["npm", "run", "dev"]
