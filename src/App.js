import { useEffect, useState } from "react";
import "./App.css";
import Home from './components/Home'
import Navbar from "./components/Navbar";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
