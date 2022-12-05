const { postService } = require('../services');

module.exports = async (req, res, next) => {
  const { id: userId } = req.user;
  const { id: postId } = req.params;

  const post = await postService.checkUserIdFromPost(postId, userId);

  if (!post) return res.status(401).json({ message: 'Unauthorized user' });

  next();
};
