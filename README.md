# TDD NodeJs

## Intorudction
This porject was created as part of the tdd programming practicing and using jest as framework for unit and integration testing in NodeJs.

## Installation
The installation of the project it requires to run the following command in your terminal:
```bash
cd path/to/project
npm run build && npm start
```
Running this command it builds and starts the project, using the default port ```300```
Internally this command executes the following steps:
- First the ```npm install``` command is executed.
- Then the test command with jest is executed ```npm test```
- With all the test passed, the the program runs with ```node app```

### Additional configuration for installation
This project uses the port ```3000``` as default. To change the default port, it requires two steps.
- First you need to change the name from file in root folder ```.exampleenv``` to ```.env```
- Then the property defined as ```PORT``` in this file need to be overwrited for any other port number.

## Project development configuration
In this NodeJs project is configured with several development libraries to get a formatted and well tested code, using:
- [jest](https://jestjs.io/) - Jasvascript testing framework
- [eslint](https://eslint.org/) - Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [prettier](https://prettier.io/docs/en/index.html) - Code formatter
- [supertest](https://github.com/visionmedia/supertest#readme) - To provide a high-level abstraction for testing HTTP

The configuration for eslint in this project looks as follows:
```json
{
    "eslintConfig": {
    "parserOptions": {
      "ecmaVersion": 6
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
    "plugins": ["prettier"],
    "env": {
      "node": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "eqeqeq": "warn",
      "prettier/prettier": "warn"
    }
  },
  "prettier": {
    "singleQuote": true,
    "printWidth": 120
  }
}
```