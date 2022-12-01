require('dotenv').config();
const app = require('./app');
const usersController = require('./controllers/usersController');
const categoriesController = require('./controllers/categoresController');
const validateUser = require('./middlewares/validateUser');
const validateJWT = require('./auth/validateJWT');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', usersController.login);
app.post('/user', validateUser, usersController.create);
app.get('/user', validateJWT, usersController.getAllUser);
app.get('/user/:id', validateJWT, usersController.getById);
app.post('/categories', validateJWT, categoriesController.create);
app.get('/categories', validateJWT, categoriesController.getAll);

app.listen(port, () => console.log('ouvindo porta', port));
