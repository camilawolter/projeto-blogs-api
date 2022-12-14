require('dotenv').config();
const app = require('./app');
const usersController = require('./controllers/usersController');
const categoriesController = require('./controllers/categoriesController');
const postController = require('./controllers/postController');
const validateUser = require('./middlewares/validateUser');
const validatePost = require('./middlewares/validatePost');
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
app.delete('/user/me', validateJWT, usersController.remove);
app.post('/categories', validateJWT, categoriesController.create);
app.get('/categories', validateJWT, categoriesController.getAll);
app.get('/post/search?', validateJWT, postController.getAllSearchTerm);
app.get('/post', validateJWT, postController.getAll);
app.get('/post/:id', validateJWT, postController.getById);
app.post('/post', validateJWT, validatePost.existCategory,
  validatePost.bodyValidate, postController.create);
app.put('/post/:id', validateJWT, validatePost.bodyUpdateValidate, postController.update);
app.delete('/post/:id', validateJWT, postController.remove);

app.listen(port, () => console.log('ouvindo porta', port));
