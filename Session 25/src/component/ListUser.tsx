import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  address: string;
};

const users: User[] = [
  { id: 1, name: "Triệu Quốc Bình", email: "Binh@gmail.com", address: "Hải Phòng" },
  { id: 2, name: "Nguyễn Văn A", email: "VanA@gmail.com", address: "Hải Phòng" },
];

const ListUser = () => {
  const navigate = useNavigate();

  const handleDetail = (user: User) => {
    navigate(`/user-detail/${user.id}`, { state: user });
  };

  return (
    <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", padding: 16, minWidth: 250 }}
        >
          <div>Id: {user.id}</div>
          <div>UserName: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Address: {user.address}</div>
          <button
            style={{ marginTop: 12, width: "100%" }}
            onClick={() => handleDetail(user)}
          >
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
