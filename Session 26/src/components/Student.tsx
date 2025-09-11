import { useParams } from "react-router-dom";

function Student() {
  const { name } = useParams<{ name: string }>();
  return (
    <div>
      <h2>Student</h2>
      <p>Student Name: {name}</p>
    </div>
  );
}

export default Student;
