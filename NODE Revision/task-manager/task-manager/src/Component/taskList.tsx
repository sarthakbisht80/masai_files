import { Task } from '../types/task';

interface Props {
  tasks: Task[];
  onSelect: (taskId: string) => void;
  title: string;
}

export const TaskList = ({ tasks, onSelect, title }: Props) => {
  return (
    <div className="w-1/2 p-4 border">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => onSelect(task.id)}
          className={`p-2 mb-1 rounded cursor-pointer ${
            task.selected ? 'border-2 border-blue-500' : ''
          } ${task.status === 'pending' ? 'text-red-600' : 'text-green-600'}`}
        >
          {task.title}
        </div>
      ))}
    </div>
  );
};
