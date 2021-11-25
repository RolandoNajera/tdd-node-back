const express = require('express');
const userRouter = require('./user/router');

const app = express();

app.use(express.json());

app.use('/', userRouter);

module.exports = app;
