const CategoriesService = require('../services/categories.service');

const create = async (req, res, next) => {
  try {
    const response = await CategoriesService.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await CategoriesService.getAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};