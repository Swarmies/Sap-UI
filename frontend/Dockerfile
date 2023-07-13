# base image
FROM node:18-alpine

# set the user to non root
# RUN adduser -D appuser -u 1001 

# USER appuser

# defining the work directory
WORKDIR /workspace/frontend

# copy all the package files to the container
COPY package.json ./  

# RUN NODE_ENV=production npm ci

# running npm install
RUN npm install -g

# Intalling react 
RUN npm install react-scripts@3.4.1 -g 


COPY install-dev-packages.sh ./
RUN chmod +x install-dev-packages.sh
RUN /bin/ash install-dev-packages.sh


# install npmvet
RUN npm install npmvet -g 

# copying everything in local directory to the work directory of the container
COPY . ./

CMD ["npm", "test"]
