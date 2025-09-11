import { useParams } from "react-router-dom";

function Team() {
  const { teamId } = useParams();
  return <div>Id team: {teamId}</div>;
}

export default Team;
