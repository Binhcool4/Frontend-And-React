import { Checkbox, Chip, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface TaskItemProps {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

const priorityColor = {
  low: "success",
  medium: "warning",
  high: "error",
} as const;

const TaskItem = ({
  id,
  taskName,
  completed,
  priority,
  onToggle,
  onDelete,
  onEdit,
}: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <span
          className={`text-sm ${completed ? "line-through text-gray-400" : ""}`}
        >
          {taskName}
        </span>
        <Chip
          label={priority.toUpperCase()}
          color={priorityColor[priority]}
          size="small"
          className="ml-2"
        />
      </div>
      <div>
        <IconButton onClick={() => onDelete(id)} color="error">
          <Delete />
        </IconButton>
        <IconButton color="primary" onClick={() => onEdit && onEdit(id)}>
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItem;
