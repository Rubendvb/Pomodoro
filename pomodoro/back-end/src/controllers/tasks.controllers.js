const db = require('../config/database');

// ==> Método responsável por criar uma nova 'Task':

exports.createdTask = async (req, res) => {
    const { task } = req.body;
    const { rows } = await db.query(
        "INSERT INTO tasks (task) VALUES ($1)",
        [task]
    );

    res.status(201).send({
        message: "Tarefa adicinada con successo!",
        body: {
            task: { task }
        },
    });
};