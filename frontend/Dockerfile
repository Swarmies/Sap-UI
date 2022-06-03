# base image
FROM node:18-alpine

# defining the work directory
WORKDIR /workarea/frontend

# copy all the package files to the container
COPY package.json package-lock.json ./

# RUN NODE_ENV=production npm ci

# running npm install
RUN npm install 

# Intalling react 
RUN npm install react-scripts@3.4.1 -g 

# copying everything in local directory to the work directory of the container
COPY . ./

#  expose port to the local host
EXPOSE 3000