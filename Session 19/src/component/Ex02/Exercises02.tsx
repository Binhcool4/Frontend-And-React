import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";
import Content from "./Content";
import "./Exersices02.css";
function Exercises02() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default Exercises02;
