import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const user = location.state;

  if (!user) {
    return <div>Không tìm thấy thông tin user.</div>;
  }

  return (
    <div style={{width: '15%'}}>
      <h2>Thông tin chi tiết</h2>
      <div style={{ border: "1px solid #ccc", padding: 16, minWidth: 300 }}>
        <div>Id: {user.id}</div>
        <div>UserName: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Address: {user.address}</div>
        <button style={{ marginTop: 12 }}>Xem chi tiết</button>
      </div>
    </div>
  );
};

export default UserDetail;
