import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Ex02.css"
function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="content">
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>Theme hiện tại: {theme.toUpperCase()}</p>
    </div>
  );
}

export default Content;
