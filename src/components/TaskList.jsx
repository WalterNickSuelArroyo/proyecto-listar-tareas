import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTaskCompletion, removeTask, getCategoryColor }) => {
  return (
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
  );
};

export default TaskList;
