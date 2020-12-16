const router = require('express-promise-router')();
const taskControllers = require('../controllers/tasks.controllers');

// ==> Definido as rotas do CRUD -'Tasks':

// ==> Rota responsável por criar uma nova 'Tasks': (POST): localhost:3000/api/tasks
router.post('/tasks', taskControllers.createdTask);

// ==> Rota responsável por listar todas as 'Tasks': (GET): localhost:3000/api/tasks
router.get('/tasks', taskControllers.listAllTasks);

// ==> Rota responsável por selecionar 'Tasks' pelo 'Id': (GET): localhost:3000/api/tasks/:id
router.get('/tasks/:id', taskControllers.findTaskById);

// ==> Rota responsável por atualizar 'Task' pelo 'Id': (PUT): localhost: 3000/api/tasks/:id
router.put('/tasks/:id', taskControllers.updateTaskById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/tasks/:id', taskControllers.deleteTaskById);

module.exports = router;