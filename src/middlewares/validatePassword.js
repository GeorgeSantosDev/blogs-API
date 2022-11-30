const MINIMUM_CHARACTER = 6;

module.exports = async (req, res, next) => {
  const { password } = req.body; 

  if (!password || password.length < MINIMUM_CHARACTER) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};
