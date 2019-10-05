# One of the best Docker images for Node.js apps
FROM node:carbon

# Use these variables if you didn't fill the config.ts file
ENV TG_CHAT_ID ""
ENV TG_API_KEY ""

# Create app directory
WORKDIR /usr/src/snapmatic-server
 
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install typescript compiler
RUN npm install -g typescript@latest

# Install service dependencies
RUN npm install

# Build the service
RUN npm run build

# Bundle service source
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the service
CMD [ "node", "dist/index.js" ]