const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const category = await Category.findAll();
  return category;
};

module.exports = {
  create,
  getAll,
};