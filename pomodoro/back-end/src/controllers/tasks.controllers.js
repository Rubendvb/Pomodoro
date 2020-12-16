const db = require('../config/database');

// ==> Método responsável por criar uma nova 'Task':

exports.createdTask = async (req, res) => {
    const { task } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tasks (task) VALUES ($1)",
        [task]
    );

    res.status(201).send({
        message: "Tarefa adicinada con sucesso!",
        body: {
            task: { task }
        },
    });
};

exports.listAllTasks = async (req, res) => {
    const response = await db.query('SELECT * FROM tasks ORDER BY task ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Task' pelo 'Id':
exports.findTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { task } = req.body;

  const response = await db.query(
    "UPDATE tasks SET task = $1 WHERE task_id = $2",
    [task, taskId]
  );

  res.status(200).send({ message: "Tarefa atualizada com sucesso" });
};

// ==> Método responsável por excluir uma 'Task' pelo 'Id':
exports.deleteTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);
  await db.query('DELETE FROM tasks WHERE task_id = $1', [
    taskId
  ]);

  res.status(200).send({ message: 'Tarefa excluida com sucesso!', taskId });
};