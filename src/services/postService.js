const { BlogPost, User, Category, PostCategory, sequelize } = require('../models');

const getAll = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const getById = async (id) => {
  const [post] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const create = async (post, userId) => {
  const { title, content, categoryIds } = post;
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId }, { transaction: t },
    );
    const postId = newPost.dataValues.id;
    console.log(newPost);
    const postCategory = categoryIds.map(async (categoryId) => PostCategory
    .create({ postId, categoryId }, { transaction: t }));
    await Promise.all(postCategory);
    return newPost;
  });
  return result;
};

const update = async (id, { title, content }) => {
  const [postUpdated] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  return postUpdated;
};

const remove = async (id) => {
  const deletePost = await BlogPost.destroy(
    { where: { id } },
  );
  return deletePost;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};