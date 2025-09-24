import { useAppDispatch, useAppSelector } from "../hooks/CustomHooks";
import { toggle } from "../slices/menuSlice";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const items = [
  { key: "dashboard", icon: <DashboardOutlined />, label: "Bảng điều khiển" },
  { key: "account", icon: <UserOutlined />, label: "Tài khoản" },
  { key: "assets", icon: <DollarOutlined />, label: "Tài sản" },
  { key: "stats", icon: <LineChartOutlined />, label: "Thống kê" },
  { key: "docs", icon: <FileOutlined />, label: "Tài liệu" },
];

function MenuSidebar() {
  const collapsed = useAppSelector((s) => s.menu.collapsed);
  const dispatch = useAppDispatch();
  const bg = "#071a3a";
  const color = "#ffffff";
  const width = collapsed ? 56 : 220;

  const wrapper: React.CSSProperties = {
    background: bg,
    color,
    width,
    minHeight: 360,
    padding: 8,
    boxSizing: "border-box",
  };
  const itemRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 8px",
  };
  const labelStyle: React.CSSProperties = {
    display: collapsed ? "none" : "inline",
  };
  const toggleRow: React.CSSProperties = { padding: "12px 8px" };

  return (
    <div style={wrapper}>
      {items.map((it) => (
        <div key={it.key} style={itemRow}>
          <span>{it.icon}</span>
          <span style={labelStyle}>{it.label}</span>
        </div>
      ))}
      <div style={toggleRow}>
        <button
          onClick={() => dispatch(toggle())}
          style={{
            background: "transparent",
            color,
            border: "none",
            cursor: "pointer",
          }}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}{" "}
          {collapsed ? "" : "Thu gọn"}
        </button>
      </div>
    </div>
  );
}

export default MenuSidebar;
