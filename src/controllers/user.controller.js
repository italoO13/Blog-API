const userService = require('../services/user.service');

const create = async (req, res, next) => {
  try {
    const response = await userService.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await userService.getAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.getUserById(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    await userService.deleteUser(id);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getUserById,
  deleteUser,
};