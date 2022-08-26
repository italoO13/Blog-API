const express = require('express');
const { authenticated } = require('../middlewares/auth.validors');
const categoriesValidators = require('../middlewares/categories.validators');
const categoriesController = require('../controllers/categories.controller');

const router = express.Router();

router.post('/', categoriesValidators.create, authenticated, categoriesController.create);

module.exports = router;