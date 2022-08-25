const express = require('express');
const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');

const routes = express.Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);

module.exports = routes;