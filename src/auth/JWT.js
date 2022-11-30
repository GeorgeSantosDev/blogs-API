const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const createToken = (userEmail) => {
  const token = jwt.sign({ data: { email: userEmail } }, secret, jwtConfig);
  return token;
};

module.exports = { createToken };