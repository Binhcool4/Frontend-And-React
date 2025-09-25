import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";

type Task = { taskName: string };
interface TaskFormProps {
  onAdd: (
    title: string,
    priority: "low" | "medium" | "high"
  ) => Promise<boolean> | boolean;
  tasks?: Task[];
  editTask?: { taskName: string; priority: "low" | "medium" | "high" } | null;
  onUpdate?: (
    title: string,
    priority: "low" | "medium" | "high"
  ) => Promise<boolean>;
}

const TaskForm = ({ onAdd, tasks = [], editTask, onUpdate }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "">("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.taskName);
      setPriority(editTask.priority);
    } else {
      setTitle("");
      setPriority("");
    }
    setError("");
  }, [editTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Tên công việc không được để trống");
      inputRef.current?.focus();
      return;
    }
    if (
      tasks.some(
        (t) =>
          t.taskName.trim().toLowerCase() === title.trim().toLowerCase() &&
          (!editTask || t.taskName !== editTask.taskName)
      )
    ) {
      setError("Tên công việc không được trùng");
      inputRef.current?.focus();
      return;
    }
    if (!priority) {
      setError("Phải chọn độ ưu tiên");
      return;
    }
    setError("");
    if (editTask && onUpdate) {
      const result = await onUpdate(
        title,
        priority as "low" | "medium" | "high"
      );
      if (result) {
        setTitle("");
        setPriority("");
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    } else {
      const result = await onAdd(title, priority as "low" | "medium" | "high");
      if (result) {
        setTitle("");
        setPriority("");
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
    >
      <TextField
        label={error || "Công việc mới"}
        variant="outlined"
        size="small"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1"
        inputRef={inputRef}
        error={!!error}
      />
      <FormControl size="small" className="w-36" error={!!error && !priority}>
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "medium" | "high")
          }
          label={priority ? error : "Ưu tiên"}
        >
          <MenuItem value="">Chọn ưu tiên</MenuItem>
          <MenuItem value="low">Thấp</MenuItem>
          <MenuItem value="medium">Trung bình</MenuItem>
          <MenuItem value="high">Cao</MenuItem>
        </Select>
      </FormControl>
      {editTask ? (
        <>
          <Button type="submit" variant="contained" color="primary">
            CẬP NHẬT
          </Button>
        </>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Thêm
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
