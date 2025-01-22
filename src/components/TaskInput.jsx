import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskInput = ({ taskText, setTaskText, category, setCategory, addTask, error }) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4">
        <Input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full sm:w-full md:w-auto flex-grow dark:text-white"
          type="text"
          placeholder="Escribe una tarea"
        />
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-full md:w-[180px] dark:text-white">
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent className="z-50 bg-white shadow-lg border rounded-md">
            <SelectGroup>
              <SelectLabel>Categoría</SelectLabel>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="trabajo">Trabajo</SelectItem>
              <SelectItem value="urgente">Urgente</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          onClick={addTask}
          className="bg-teal-800 text-white w-full md:flex-grow-0 dark:text-white md:w-full hover:bg-teal-700 hover:text-white border-none"
          variant="outline"
        >
          Agregar tarea
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TaskInput;
