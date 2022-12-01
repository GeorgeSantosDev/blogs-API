const jwt = require('jsonwebtoken');
const { userService } = require('../services/index');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const createToken = (userEmail) => {
  const token = jwt.sign({ data: { email: userEmail } }, secret, jwtConfig);
  return token;
};

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserByEmail(decoded.data.email);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  verifyToken,
};
