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

module.exports = {
  create,
};