import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { ThemeProvider } from "@/components/ThemeProvider";
import DarkMode from "@/DarkMode";
import { useEffect, useState } from "react";


const Tareas = () => {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      return Array.isArray(storedTasks) ? storedTasks : [];
    } catch (error) {
      console.error("Error al leer las tareas desde localStorage:", error);
      return [];
    }
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
        return "bg-green-100 text-green-800";
      case "trabajo":
        return "bg-blue-100 text-blue-800";
      case "urgente":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen dark:bg-gray-800">
      <ThemeProvider>
        <div className="flex justify-end p-4">
          <DarkMode />
        </div>
        <div className="max-w-[50%] mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tareas</h1>
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
      </ThemeProvider>
    </main>
  );
};

export default Tareas;
