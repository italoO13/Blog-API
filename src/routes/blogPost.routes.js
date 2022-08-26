const express = require('express');
const { authenticated } = require('../middlewares/auth.validors');
const blogPostController = require('../controllers/blogPost.controller');
const blogPOstValidators = require('../middlewares/blogPost.validators');

const router = express.Router();

router.post('/', authenticated, blogPOstValidators.createPost, blogPostController.create);
router.get('/', authenticated, blogPostController.getAll);
router.get('/:id', authenticated, blogPostController.getPostById);

module.exports = router;