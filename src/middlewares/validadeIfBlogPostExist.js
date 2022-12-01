const { postService } = require('../services/index');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const post = await postService.getPostById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  req.body.post = post;
  next();
};