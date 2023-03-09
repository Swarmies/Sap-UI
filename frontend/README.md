# UI Readme

The frontend is built using React and Redux. The backend is built using Django and Django Rest Framework. It uses `nodejs` and npm for package management. Make sure you have the right version of nodejs installed. You can check the version by running `node -v` in your terminal. The version should be `v18.2.0`. If you don't have the right version installed, you can install it [here](https://nodejs.org/en/download/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

you can use nvm to install the right version of nodejs. You used the command below to install nvm.

```ash
nvm install 18.2.0
```

then

```ash
nvm use 18.2.0
```

you can run the command below to start the frontend server.

```ash
npm start
```

- formating you should automatically be able to format the code based on typescript requirements if not you can run this command on the fill

```ash
npx prettier --write SignIn.tsx
```

## Running the tests

You can run the command below to run the tests

```ash
npm test
```

## Installing application as a root user

Note: we are using an ash shell therefore you can log in to the root user once you have logged into the container by using

```ash
su -
```

## Running in debug mode

There is a launch.json file in the .vscode folder. You can use that to run the frontend in debug mode. you can put breakpoints in the code and debug the code.

### Break down into end-to-end tests

You can have the backend running and run the command below to run the end-to-end tests.

<!-- TODO: explain further -->
