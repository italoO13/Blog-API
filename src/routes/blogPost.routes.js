const express = require('express');
const { authenticated } = require('../middlewares/auth.validors');
const blogPostController = require('../controllers/blogPost.controller');
const blogPOstValidators = require('../middlewares/blogPost.validators');

const router = express.Router();

router.post('/', authenticated, blogPOstValidators.createPost, blogPostController.create);
router.get('/search', authenticated, blogPostController.searchPost);
router.get('/', authenticated, blogPostController.getAll);
router.get('/:id', authenticated, blogPostController.getPostById);
router.delete('/:id', authenticated, blogPostController.deletePostById);

module.exports = router;