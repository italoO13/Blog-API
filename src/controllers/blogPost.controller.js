const blogPostService = require('../services/blogPost');

const create = async (req, res, next) => {
  try {
    const { id } = req.user;
    const response = await blogPostService.create(id, req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await blogPostService.getAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await blogPostService.getPostById(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: idUser } = req.user;
    await blogPostService.deletePostById(id, idUser);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const searchPost = async (req, res, next) => {
  try {
    const { q } = req.query;
    const response = await blogPostService.searchPost(q);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const editPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const response = await blogPostService.editPost(id, userId, req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getPostById,
  deletePostById,
  searchPost,
  editPost,
};