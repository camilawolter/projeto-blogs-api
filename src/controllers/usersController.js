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

module.exports = {
  login,
};