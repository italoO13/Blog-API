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

module.exports = {
  create,
  getAll,
  getPostById,
};