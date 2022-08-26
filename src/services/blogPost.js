const { BlogPost, PostCategory, sequelize, Category, User } = require('../database/models');
const CustomError = require('../utils/customError');

const create = async (id, { title, content, categoryIds }) => {
  const response = await sequelize.transaction(async (transaction) => {
    const post = await BlogPost.create(
      { title, content, userId: id }, 
      { transaction },
);
    const categories = categoryIds.map((catId) => ({ postId: post.id, categoryId: catId }));
    try {
      await PostCategory.bulkCreate(
        categories,
        { transaction },
      );
    } catch (err) {
      throw new CustomError(400, '"categoryIds" not found');
    }
    return post;
  });
  return response;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      }, 
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      }],
  });
  return posts;
};

module.exports = {
  create,
  getAll,
};