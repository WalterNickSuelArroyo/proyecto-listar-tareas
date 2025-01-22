import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  removeTask,
  getCategoryColor,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-300">
          No hay tareas por el momento
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              toggleTaskCompletion={toggleTaskCompletion}
              removeTask={removeTask}
              getCategoryColor={getCategoryColor}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
