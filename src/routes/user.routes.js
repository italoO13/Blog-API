const express = require('express');
const userController = require('../controllers/user.controller');
const userValidate = require('../middlewares/user.validators');

const router = express.Router();

router.post('/', userValidate.create, userController.create);

module.exports = router;