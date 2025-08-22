import { useEffect, useState } from 'react';
import { Task } from './types/Task';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { TransferButtons } from './components/TransferButtons';
import { fetchTasks, addTask, updateTask } from './api/tasks';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(res => setTasks(res.data));
  }, []);

  const handleAddTask = async (task: Task) => {
    const res = await addTask(task);
    setTasks([...tasks, res.data]);
  };

  const handleSelect = (taskId: string) => {
    setTasks(tasks.map(t => ({ ...t, selected: t.id === taskId ? !t.selected : t.selected })));
  };

  const moveSelectedTasks = async (fromStatus: 'pending' | 'completed', toStatus: 'pending' | 'completed') => {
    const updatedTasks = tasks.map(t => {
      if (t.selected && t.status === fromStatus) {
        updateTask(t.id, { status: toStatus });
        return { ...t, status: toStatus, selected: false };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const pendingTasks = tasks.filter(t => t.status === 'pending');
  const completedTasks = tasks.filter(t => t.status === 'completed');

  // Drag & Drop Handler
  const handleDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(pendingTasks);
    const [reordered] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reordered);

    // Update order in backend
    for (let i = 0; i < items.length; i++) {
      const task = items[i];
      task.order = i;
      await updateTask(task.id, { order: i });
    }

    // Update state
    const otherTasks = tasks.filter(t => t.status !== 'pending');
    setTasks([...items, ...otherTasks]);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <TaskInput onAdd={handleAddTask} />
      <div className="flex w-full max-w-3xl">
        {/* Pending Tasks with Drag & Drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="pending">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/2 p-4 border"
              >
                <h2 className="text-lg font-bold mb-2">Pending Tasks</h2>
                {pendingTasks
                  .sort((a, b) => a.order - b.order)
                  .map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => handleSelect(task.id)}
                          className={`p-2 mb-1 rounded cursor-pointer ${
                            task.selected ? 'border-2 border-blue-500' : ''
                          } text-red-600`}
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Transfer Buttons */}
        <TransferButtons
          onMoveToCompleted={() => moveSelectedTasks('pending', 'completed')}
          onMoveToPending={() => moveSelectedTasks('completed', 'pending')}
        />

        {/* Completed Tasks */}
        <TaskList tasks={completedTasks} onSelect={handleSelect} title="Completed Tasks" />
      </div>
    </div>
  );
};
