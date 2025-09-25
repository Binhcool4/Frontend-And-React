import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useState, useEffect } from "react";
import ModalConfirmDelete from "./components/ModalConfirmDelete";
import LoadingOverlay from "./components/LoadingOverlay";
import axios from "axios";

interface Task {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteTask, setDeleteTask] = useState<Task | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Task[]>("http://localhost:8080/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (
    taskName: string,
    priority: "low" | "medium" | "high"
  ): Promise<boolean> => {
    const newTask: Task = {
      id: Date.now().toString(),
      taskName,
      completed: false,
      priority,
    };
    try {
      const res = await axios.post("http://localhost:8080/tasks", newTask);
      setTasks([...tasks, res.data]);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleToggle = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, completed: !task.completed };

    axios.put(`http://localhost:8080/tasks/${id}`, updated).then(() => {
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    });
  };

  const handleDelete = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setDeleteTask(task);
      setOpenDelete(true);
    }
  };

  const handleEdit = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) setEditingTask(task);
  };

  const handleUpdate = async (
    taskName: string,
    priority: "low" | "medium" | "high"
  ): Promise<boolean> => {
    if (!editingTask) return false;
    const updatedTask: Task = {
      ...editingTask,
      taskName,
      priority,
    };
    try {
      await axios.put(
        `http://localhost:8080/tasks/${editingTask.id}`,
        updatedTask
      );
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? updatedTask : t))
      );
      setEditingTask(null);
      return true;
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
      return false;
    }
  };

  const handleConfirmDelete = async () => {
    if (deleteTask) {
      await axios.delete(`http://localhost:8080/tasks/${deleteTask.id}`);
      setTasks(tasks.filter((t) => t.id !== deleteTask.id));
      setOpenDelete(false);
      setDeleteTask(null);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;
    const matchSearch = t.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen relative">
      {loading && <LoadingOverlay />}
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm
        onAdd={handleAdd}
        tasks={tasks}
        editTask={
          editingTask
            ? {
                taskName: editingTask.taskName,
                priority: editingTask.priority,
              }
            : null
        }
        onUpdate={handleUpdate}
      />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
        <ModalConfirmDelete
          open={openDelete}
          taskName={deleteTask?.taskName || ""}
          onClose={() => {
            setOpenDelete(false);
            setDeleteTask(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
};

export default App;
