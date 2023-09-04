# base image
FROM node:18-alpine

# TODO: investigate why this is not working
# https://www.baeldung.com/linux/docker-alpine-add-user
# RUN adduser -D appuser -u 1001
# USER appuser

# defining the work directory
WORKDIR /workspace

# copy all the package files to the container
COPY package.json ./

# RUN NODE_ENV=production npm ci

# Installing react
RUN npm install react-scripts@3.4.1 -g

# running npm install
RUN npm install -g typescript

COPY install-dev-packages.sh ./
RUN chmod +x install-dev-packages.sh
RUN /bin/ash install-dev-packages.sh

# copying everything in the local directory to the work directory of the container
COPY . ./

CMD ["npm","run","test"]
