const { readTodo, writeTodos } = require('../models/todoModel');

exports.getAllTodos = (req, res) => {
    const todos = readTodo();
    res.json(todos);
};

exports.addTodo = (req, res) => {
    const { title, completed } = req.body;
    if (!title || completed === undefined) {
        return res.status(400).json({ error: 'Title and completed are required' });
    }
    const todos = readTodo();
    const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title,
        completed
    };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { completed, title } = req.body;
    const todos = readTodo();
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).json({ error: 'Todo not found' });

    if (completed !== undefined) todo.completed = completed;
    if (title !== undefined) todo.title = title;

    writeTodos(todos);
    res.json(todo);
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    let todos = readTodo();
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index === -1) return res.status(404).json({ error: 'Todo not found' });

    const deleted = todos.splice(index, 1);
    writeTodos(todos);
    res.json(deleted[0]);
};

exports.searchTodos = (req, res) => {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Query param q is required' });

    const todos = readTodo();
    const results = todos.filter(t => t.title.toLowerCase().includes(q.toLowerCase()));
    res.json(results);
};
