const categoriesService = require('../services/categoriesService');

const existCategory = async (req, res, next) => {
  const { categoryIds: array } = req.body;
  const categories = await categoriesService.getAll();
  const categoryIds = categories.map((category) => category.id);
  const result = array.every((id) => categoryIds.includes(id));
  if (!result) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const bodyValidate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const bodyUpdateValidate = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  existCategory,
  bodyValidate,
  bodyUpdateValidate,
};