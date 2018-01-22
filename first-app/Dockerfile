FROM mhart/alpine-node:latest

WORKDIR /src

#Copy the dependencies
COPY package.json package.json
RUN npm install

# Bundle app source
COPY . /src

EXPOSE  8080
CMD ["node", "app.js"]
