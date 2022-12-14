const jwt = require('jsonwebtoken');
const usersService = require('../services/usersServices');

const secret = process.env.JWT_SECRET;

const isBodyValid = (username, password) => username && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await usersService.getAll(email);

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (!response || response.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({ data: { user: response.id } }, secret, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await usersService.create({ displayName, email, password, image });

    const token = jwt.sign({ data: { user: user.id } }, secret, {
      expiresIn: '1h',
    });
    res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllUser = async (req, res) => {
  const books = await usersService.getAllUser();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
};

const remove = async (req, res) => {
  const { user } = req.user.data;
  await usersService.remove(user);
  return res.status(204).json();
};

module.exports = {
  login,
  create,
  getAllUser,
  getById,
  remove,
};