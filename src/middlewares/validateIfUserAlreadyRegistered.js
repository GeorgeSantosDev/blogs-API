const { userService } = require('../services/index');

module.exports = async (req, res, next) => {
  const { email } = req.body; 

  const user = await userService.getUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};
