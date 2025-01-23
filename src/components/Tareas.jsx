import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import DarkMode from "@/DarkMode";
import { useEffect, useState } from "react";

const Tareas = () => {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return Array.isArray(storedTasks) ? storedTasks : [];
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) {
      setError("Debes escribir una tarea");
      return;
    }
    if (!category) {
      setError("Debes seleccionar una categoría");
      return;
    }
    if (taskText.length > 50) {
      setError("La tarea no puede tener más de 50 caracteres");
      return;
    }

    setTasks([...tasks, { text: taskText.trim(), category, completed: false }]);
    setTaskText("");
    setCategory("");
    setError("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "personal":
        return "bg-white text-black border-l-8 border-l-green-500";
      case "trabajo":
        return "bg-white text-black border-l-8 border-l-blue-500";
      case "urgente":
        return "bg-white text-black border-l-8 border-l-red-500";
      default:
        return "";
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen dark:bg-gray-800">
      <div className="flex justify-end p-4">
        <DarkMode />
      </div>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 mt-10 bg-blue-50 dark:bg-transparent dark:border-2 dark:border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center dark:text-white">
          Lista de Tareas
        </h1>
        <TaskInput
          taskText={taskText}
          setTaskText={setTaskText}
          category={category}
          setCategory={setCategory}
          addTask={addTask}
          error={error}
        />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
          getCategoryColor={getCategoryColor}
        />
      </div>
    </main>
  );
};

export default Tareas;
