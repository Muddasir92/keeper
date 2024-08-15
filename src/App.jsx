import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Copyright from "./components/copyright"
import Note from "./components/note"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Note/>
    <Copyright/>
    </>
  );
}

export default App;
