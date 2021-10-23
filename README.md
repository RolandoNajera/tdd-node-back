# TDD NodeJs

## Intorudction
This porject was created as part of the tdd programming practicing and using jest as framework for unit and integration testing in NodeJs.

## Installation
The installation of the project it requires to run the following command in your terminal:
```bash
cd path/to/project
npm run build && npm start
```
Running this command it builds and start the project, using the default port ```300 ```
Internally this command executes the following steps:
- First the ```npm install``` command is executed.
- Then the test command with jest is executed ```npm test```
- With all the test passed, the the program runs with ```node app```

## Additional configuration
This project uses the port ```3000``` as default. To change the default port, it requires two steps.
- First you need to change the name from file in root folder ```.exampleenv``` to ```.env```
- Then the property defined as ```PORT``` in this file need to be overwrited for any other port number.