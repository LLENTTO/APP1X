FROM node:lts

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 
RUN npm install daisyui
RUN npm install next
RUN npm install react-icons
RUN npm install uuid
RUN npm install json-server

COPY . .

EXPOSE 3000

# Run the Next.js app
CMD ["npm", "run", "dev","node", "dist/backend/server.js"]

