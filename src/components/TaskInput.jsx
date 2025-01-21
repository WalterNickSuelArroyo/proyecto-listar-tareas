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
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full sm:w-auto flex-grow"
          type="text"
          placeholder="Escribe una tarea"
        />
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-[180px]">
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
          className="bg-green-700 text-white"
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
