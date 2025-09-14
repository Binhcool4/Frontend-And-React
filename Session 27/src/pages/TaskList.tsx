import { Link } from "react-router-dom";
import { tasks } from "../data/tasks";
import "../styles/TaskList.css";

function TaskList() {
  return (
    <div className="task-list-container">
      <h1 className="task-list-title">Danh sách công việc</h1>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h2 className="task-card-title">{task.title}</h2>
          <div className="task-card-desc">{task.description}</div>
          <Link to={`/tasks/${task.id}`} className="task-card-link">
            Xem chi tiết
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
