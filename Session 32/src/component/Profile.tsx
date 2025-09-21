import { useSelector } from "react-redux";
import type { RootState } from "../store/index";
const Profile = () => {
  const user = useSelector((state: RootState) => state.users[0]);

  if (!user) return null;

  return (
    <div>
      <b>Thông tin cá nhân</b>
      <div>Id: {user.id}</div>
      <div>Họ và tên: {user.userName}</div>
      <div>Giới tính: {user.gender}</div>
      <div>Ngày sinh: {user.dateBirth}</div>
      <div>Địa chỉ: {user.address}</div>
    </div>
  );
};

export default Profile;
