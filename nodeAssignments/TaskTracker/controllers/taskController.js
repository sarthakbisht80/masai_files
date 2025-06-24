const {readfile,writefile } = require("../models/taskModel");

exports.getTasks=(req,res)=>{
    const tasks= readfile();
    console.log(tasks);
    res.json(tasks);

}
//filter by tag

exports.filterTasks=(req,res)=>{
    const tag= req.query.tag; 
    const tasks= readfile(); //reading tasks
  const filtered=  tasks.filter(task=> task.tag.toLoweCase()=== tag.toLoweCase());
    res.json(filtered);
}

//Add task
exports.addTask = (req, res) => {
  
    const tasks =readfile();
  const newTask={
    id: tasks.length ? tasks[tasks.length-1].id+1 :1,
    ...req.body
  }
  tasks.push(newTask);
  writefile(tasks);
  res.status(201).json({msg:"taks added",task:newTask});
};

exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    let tasks = readTasks();
    let found = false;

    tasks = tasks.map(task => {
        if (task.id === id) {
            found = true;
            return { ...task, ...updatedData };
        }
        return task;
    });

    if (!found) {
        return res.status(404).json({ msg: 'Task not found' });
        }    writeTasks(tasks);
    res.json({ msg: 'Task updated' });
};

// Delete a task
exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const tasks = readTasks();
    const filtered = tasks.filter(task => task.id !== id);

    if (tasks.length === filtered.length) {
        return res.status(404).json({ msg:"Task not found" });
    }

    writeTasks(filtered);
    res.json({ msg:'Task deleted'});
};