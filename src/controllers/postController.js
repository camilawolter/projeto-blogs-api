const postService = require('../services/postService');

const getAll = async (_req, res) => {
  const post = await postService.getAll();
  res.status(200).json(post);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  res.status(200).json(post);
};

module.exports = {
  getAll,
  getById,
};