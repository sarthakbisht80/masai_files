import { useState } from 'react';
import { Task } from '../types/task';

interface Props {
  onAdd: (task: Task) => void;
}

export const TaskInput = ({ onAdd }: Props) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status: 'pending',
      order: 0,
    };
    onAdd(newTask);
    setTitle('');
  };

  return (
    <div className="flex mb-4 w-full max-w-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 flex-grow rounded"
      />
      <button
        onClick={handleAdd}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};
