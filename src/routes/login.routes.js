const express = require('express');
const loginController = require('../controllers/login.controller');
const loginValidate = require('../middlewares/login.validators');

const router = express.Router();

router.post('/', loginValidate.createSession, loginController.createSession);

module.exports = router;