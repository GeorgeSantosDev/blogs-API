module.exports = (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  if (id !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};
