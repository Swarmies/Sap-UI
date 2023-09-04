#!/bin/ash

# Install the necessary debugging tools (e.g., Node.js inspector)
apk add --no-cache nodejs npm
npm install typescript
npm install -g ts-node
npm install -g nodemon
npm install -g npmvet
