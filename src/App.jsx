import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Copyright from "./components/copyright";
import Note from "./components/note";
import Keep from "./components/keep";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Keep />
      {/* <Copyright/> */}
    </>
  );
}

export default App;
