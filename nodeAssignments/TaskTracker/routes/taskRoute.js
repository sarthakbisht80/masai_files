const express = require("require");
const router= express.router();

const controller = require('../controllers/taskController');

router.get('tasks',controller.getTasks);
router.get('tasks/filter',controller.filterTasks);
router.get("tasks",controller.addTask);
router.get("/tasks/:id",controller.updateTask);
router.get("/tasks/:id",controller.deleteTask);
module.exports=router;
