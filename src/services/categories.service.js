const { Category } = require('../database/models');
const CustomError = require('../utils/customError');

const create = async ({ name }) => {
  const existCateg = await Category.findAll({
    where: { name },
  });
  if (existCateg.length) {
    throw new CustomError(400, 'Existing category');
  }
  const category = await Category.create({
    name,
  });
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};