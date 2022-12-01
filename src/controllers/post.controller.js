const { postService } = require('../services/index');

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await postService.getAllPosts();

    res.status(200).json(allPosts);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

module.exports = {
  getAllPosts,
};
