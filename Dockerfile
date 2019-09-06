FROM arm32v7/node

ENV chatId ""
ENV apiKey ""

# Create app directory
WORKDIR /usr/src/snapmatic-server
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm install

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]