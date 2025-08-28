import { useReducer, useEffect, useState } from "react";
import "./Exercises08.css";

interface Task {
  id: number;
  name: string;
}

interface State {
  tasks: Task[];
}

type Action = { type: "set"; payload: Task[] } | { type: "delete"; payload: number } | { type: "add"; payload: Task };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "set":
      return { ...state, tasks: action.payload };
    case "add":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "delete":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

function Exercises08() {
  const initialTasks: Task[] = [
    { id: 1, name: "Quét nhà" },
    { id: 2, name: "Giặt quần áo" },
    { id: 3, name: "Code" },
  ];

  const [state, dispatch] = useReducer(reducer, { tasks: initialTasks });
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch({ type: "set", payload: JSON.parse(storedTasks) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleDeleteTask = (task: Task) => {
    const isConfirm = window.confirm(`Bạn có chắc muốn xóa "${task.name}"?`);
    if (isConfirm) {
      dispatch({ type: "delete", payload: task.id });
    }
  };

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    const newTask: Task = { id: Date.now(), name: taskName };
    dispatch({ type: "add", payload: newTask });
    setTaskName("");
  };

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center" ,gap:"10px"}}>
        <input
          type="text"
          id="taskInput"
          placeholder="Nhập tên công việc"
          className="task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Ok
        </button>
      </div>
      {state.tasks.map((task) => (
        <div key={task.id} className="task-item">
          <span>{task.name}</span>
          <button className="delete-btn" onClick={() => handleDeleteTask(task)}>
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}

export default Exercises08;
