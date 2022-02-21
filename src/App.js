import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./styles.css";

export default function App() {
  const [darkMode, setDarkmode] = useState(true);

  const toggleDarkMode = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
