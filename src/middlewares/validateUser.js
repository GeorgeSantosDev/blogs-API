const { userService } = require('../services/index');

module.exports = async (req, res, next) => {
  const { email, password } = req.body; 

  const user = await userService.getUserByEmail(email);

  if (user.email !== email || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};
