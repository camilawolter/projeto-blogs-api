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

const create = async (req, res) => {
  const { user } = req.user.data;

  const newPost = await postService.create(req.body, user);
  return res.status(201).json(newPost);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { user } = req.user.data;
  const existPost = await postService.getById(id);
  if (!existPost) return res.status(404).json({ message: 'Post does not exist' });
  if (existPost.userId !== user) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const updatePost = await postService.update(id, req.body);

  if (updatePost) return res.status(200).json(await postService.getById(id));
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};