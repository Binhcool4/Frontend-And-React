import { LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Message from "./Message";

export default function Exercises09() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSelector />
        <Message />
      </div>
    </LanguageProvider>
  );
}
