const { Op } = require('sequelize');
const { BlogPost, PostCategory, sequelize, Category, User } = require('../database/models');
const CustomError = require('../utils/customError');

const verifyUser = async (id, userId) => {
  const post = await BlogPost.findByPk(id);
  if (!post) {
    throw new CustomError(404, 'Post does not exist');
  }
  if (post.userId !== userId) {
    throw new CustomError(401, 'Unauthorized user');
  }
  return post;
};

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

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      }, 
      { model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      }],
  });

  if (!post) {
    throw new CustomError(404, 'Post does not exist');
  }
  return post; 
};

const searchPost = async (search) => {
  const response = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: search } },
        { content: { [Op.substring]: search } },
      ],
    },

    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] },
      }],
  });
  return response;
};

const deletePostById = async (id, userId) => {
  await verifyUser(id, userId);
  const response = await BlogPost.destroy(
    { where: { id } },
  );
  return response;
};

const editPost = async (id, userId, { title, content }) => {
  await verifyUser(id, userId);
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  return getPostById(id);
};

module.exports = {
  create,
  getAll,
  getPostById,
  deletePostById,
  searchPost,
  editPost,
};