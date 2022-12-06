const { User } = require('../models');

const getAll = async (email) => {
  const [data] = await User.findAll({
    where: { email },
  });
  return data;
};

const create = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAllUser = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const [users] = await User.findAll({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return users;
};

const remove = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );
  return user;
};

module.exports = {
  getAll,
  create,
  getAllUser,
  getById,
  remove,
};