import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageSelector() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label>Ngôn ngữ hiện tại: </label>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value as "en" | "vi")}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}
