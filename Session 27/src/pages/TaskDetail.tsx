import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "../data/tasks";
import "../styles/TaskDetail.css";

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="task-detail-container">
        <h2 className="task-detail-notfound">Công việc không tồn tại</h2>
        <button className="task-detail-btn" onClick={() => navigate("/tasks")}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="task-detail-container">
      <h1 className="task-detail-title">{task.title}</h1>
      <div className="task-detail-desc">{task.description}</div>
      <button className="task-detail-btn" onClick={() => navigate("/tasks")}>
        Quay lại
      </button>
    </div>
  );
}

export default TaskDetail;
