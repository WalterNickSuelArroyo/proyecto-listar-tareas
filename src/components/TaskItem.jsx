import { Button } from "@/components/ui/button";

const TaskItem = ({ task, index, toggleTaskCompletion, removeTask, getCategoryColor }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 rounded-lg shadow-md ${getCategoryColor(
        task.category
      )}`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <span className="text-sm">
          {task.text.length > 10 ? `${task.text.slice(0, 10)}...` : task.text}
        </span>
      </div>
      <Button
        className="bg-red-500 text-white hover:text-gray-100 hover:border"
        onClick={() => removeTask(index)}
      >
        Eliminar
      </Button>
    </li>
  );
};

export default TaskItem;
