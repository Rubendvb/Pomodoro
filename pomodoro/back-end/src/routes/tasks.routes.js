const router = require('express-promise-router')();
const taskControllers = require('../controllers/tasks.controllers');

// ==> Definido as rotas do CRUD -'Tasks':

//// ==> Rota responsável por criar um novo 'Tasks': (POST): localhost:3000/Tasks
router.post('/tasks', taskControllers.createTask);

module.exports = router;