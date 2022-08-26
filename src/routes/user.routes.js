const express = require('express');
const userController = require('../controllers/user.controller');
const userValidate = require('../middlewares/user.validators');
const { authenticated } = require('../middlewares/auth.validors');

const router = express.Router();

router.post('/', userValidate.create, userController.create);
router.get('/', authenticated, userController.getAll);
router.get('/:id', authenticated, userController.getUserById);

module.exports = router;