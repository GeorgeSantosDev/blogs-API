const { postService } = require('../services/index')

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const post = await postService.getPostById(id);
  req.post = post;

  if (userId !== post.userId) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};
