const { postService } = require('../services');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const postExist = postService.getPostById(id);

  if (!postExist) return res.status(404).json({ message: 'Post does not exist' });

  next();
};