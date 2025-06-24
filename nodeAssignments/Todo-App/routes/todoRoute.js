const express = require('express');
const router = express.Router();

const controller = require('../controllers/todoController');

router.get('/todos', controller.getAllTodos);
router.post('/todos', controller.addTodo);
router.put('/todos/:id', controller.updateTodo);
router.delete('/todos/:id', controller.deleteTodo);
router.get('/todos/search', controller.searchTodos);

module.exports = router;
