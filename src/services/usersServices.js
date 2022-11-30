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

module.exports = {
  getAll,
  create,
};