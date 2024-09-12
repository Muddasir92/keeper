import React, { useState } from "react";
import { info } from "./info";
import { newinfo } from "./newinfo";
import Note from "./note";
import Navbar from "./navbar";
import "../components/style.css";
import "./navbar.css";
import Copyright from "./copyright";
import Notepad from "./notepad";

function keeper() {
  const [infoarr, setInfoarr] = useState(info);

  function handleClick(notee) {
    setInfoarr((preval) => {
      return [...preval, notee];
    });
  }
  function deleteItem(id){
      console.log("deleteItems" ,id)
      setInfoarr((preval)=>{
        return preval.filter((infoarr, index )=>{
          return id !==index
        })
      })
  }
  return (
    <>
      <div className="nav" style={{ width: "100%" }}>
        <Navbar />
      </div>
      <div className="notepad_div">
        <Notepad onAdd={handleClick} />
      </div>

      <div className="fullnote">
        {infoarr.map((data,index) => {
          return (
            <Note
              
              id={index}
              key={index}
              title={data.title}
              text={data.text}
              onDelete={deleteItem}
            />
          );
        })}
      </div>
      <div className="copyright_div">
        <Copyright />
      </div>
    </>
  );
}

export default keeper;
