import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { toggleFavorite } from "../slices/userSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

function UsersList() {
  const users = useAppSelector((s) => s.user.list);
  const dispatch = useAppDispatch();

  const card: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: 12,
    maxWidth: 360,
  };
  const row: React.CSSProperties = {
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  };
  const label: React.CSSProperties = { fontWeight: 600 };
  const heart: React.CSSProperties = { color: "#e11d48", cursor: "pointer" };

  return (
    <div style={card}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>
        List Favorites User
      </div>
      {users.map((u) => (
        <div key={u.id} style={row}>
          <div>
            <span style={label}>UserName:</span> {u.name}
          </div>
          <div>
            <span style={label}>Favorites:</span>{" "}
            <span onClick={() => dispatch(toggleFavorite(u.id))} style={heart}>
              {u.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
