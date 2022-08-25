const loginService = require('../services/login.service');

const createSession = async (req, res, next) => {
  try {
    const response = await loginService.createSession(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createSession,
};