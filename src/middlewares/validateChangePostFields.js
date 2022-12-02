module.exports = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(401).json({ message: 'Some required fields are missing' });
  }

  next();
};
