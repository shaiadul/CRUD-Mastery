# BanglaBazar.com

This backend project serves as a centralized hub for managing and processing data.

#### vercel deploy endpoint : https://banglabazar.vercel.app/api/users/
## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Download and install Node.js.
  ```bash
  npm install node
- [TypeScript](https://www.typescriptlang.org/): Install TypeScript globally using the following command:
  ```bash
  npm install -g typescript


## How To Installing?

#### Clone the repository:
 ```bash
 git clone https://github.com/shaiadul/CRUD-Mastery.git
```
#### Navigate to the project directory:
 ```bash
 cd CRUD_Mastery
```
#### Install dependencies:
 ```bash
npm install
```


## How To Use?

#### Development Mode:
To run the application in development mode with automatic transpilation and server restart:
 ```bash
 npm run start:dev
```
This command uses ts-node-dev to watch for changes in the src directory, transpile TypeScript files, and restart the server.


#### Production Mode:
to build the project for production:
 ```bash
 npm run build
```
This command uses the TypeScript compiler tsc to transpile the TypeScript code into JavaScript. The compiled code is output to the dist directory.

To start the application in production mode:
 ```bash
 npm run start:prod
```

## Code Linting

#### To lint the code using ESLint:
 ```bash
 npm run lint
```
To automatically fix linting issues:
 ```bash
 npm run lint:fix
```

## Code Formatting

To format the code using Prettier:
 ```bash
 npm run format
```
To automatically fix formatting issues:
 ```bash
 npm run format:fix
```
