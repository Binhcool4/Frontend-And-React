import { useSelector } from "react-redux";
import type { RootState } from "../store/index";

const ListUser = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <table
      border={1}
      cellPadding={8}
      style={{ borderCollapse: "collapse", width: "50%" }}
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.dateBirth}</td>
            <td>{user.address}</td>
            <td>
              <button style={{ marginRight: 8 }}>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUser;
