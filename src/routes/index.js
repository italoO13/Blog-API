const express = require('express');
const loginRouter = require('./login.routes');
const userRouter = require('./user.routes');
const categoriesRouter = require('./categories.routes');
const blogPostRouter = require('./blogPost.routes');

const routes = express.Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/categories', categoriesRouter);
routes.use('/post', blogPostRouter);

module.exports = routes;