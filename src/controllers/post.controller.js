const { postService } = require('../services/index');

const getAllPosts = async (_req, res) => {
  try {
    const allPosts = await postService.getAllPosts();

    res.status(200).json(allPosts);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const getPostById = async (req, res) => {
  try {
    const { post } = req.body;

    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const post = await postService.createPost(title, content, categoryIds, id);

    res.status(201).json(post);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const editPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const { edited, date } = await postService.editPost(title, content, id);

    if (edited) {
      req.post.content = content;
      req.post.title = title;
      req.post.updated = date;

      res.status(200).json(req.post);
    }
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const postDeleted = await postService.deletePost(id);

    if (postDeleted) return res.status(204).json();
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
