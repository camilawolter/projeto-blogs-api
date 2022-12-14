const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoriesService.create({ name });

    res.status(201).json(category);
  } catch (err) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const getAll = async (req, res) => {
  try {
    const cagetories = await categoriesService.getAll();
    return res.status(200).json(cagetories);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
};