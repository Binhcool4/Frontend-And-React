import{ useMemo } from "react";

function UserList() {
  const users = [
    { id: 1, name: "Binh", age: 20 },
    { id: 2, name: "An", age: 22 },
    { id: 3, name: "Chi", age: 16 },
    { id: 4, name: "Dung", age: 15 },
  ];
  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
      <h3>Danh sách người dùng trên 18 tuổi</h3>
      <ul>
        {filteredUsers.map((user) => (
          <p key={user.id}>
            {user.name} - {user.age} tuổi
          </p>
        ))}
      </ul>
    </div>
  );
}

export default UserList;