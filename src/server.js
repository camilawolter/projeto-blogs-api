require('dotenv').config();
const app = require('./app');
const usersController = require('./controllers/usersController');
const validateUser = require('./middlewares/validateUser');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', usersController.login);
app.post('/user', validateUser, usersController.create);

app.listen(port, () => console.log('ouvindo porta', port));
