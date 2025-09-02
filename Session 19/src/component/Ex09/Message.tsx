import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Message() {
  const { language } = useContext(LanguageContext);

  return <h2>{language === "en" ? "Welcome!" : "Xin chào!"}</h2>;
}
