import React, { useState } from "react";
import { info } from "./info";
import { newinfo } from "./newinfo";
import Note from "./note";
import Navbar from "./navbar";
import "../components/style.css";
import "./navbar.css";
import Copyright from "./copyright";
import Notepad from "./notepad";
const createNote = (data) => {
  // console.log(data.title);
  return <Note key={data.id} title={data.title} text={data.text} />;
};

function keeper() {
  const [infoarr, setInfoarr] = useState(info);

  function handleClick(notee) {

    setInfoarr((preval) => {
      return [...preval, notee];
    });
    
  }
  return (
    <div className="contain">
      <div className="nav" style={{ width: "100%" }}>
        <Navbar />
      </div>
      <div className="notepad_div">
        <Notepad onAdd={handleClick} />
      </div>

      <div className="fullnote">{infoarr.map(createNote)}</div>
      <div className="copyright">{/* <Copyright /> */}</div>
    </div>
  );
}

export default keeper;
