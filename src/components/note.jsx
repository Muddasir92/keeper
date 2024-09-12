import React from "react";
import "../components/style.css";
import keep from "./keep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note(props) {
  return (
    <div className="note">
      <h1> {props.title} </h1>
      <hr />
      <p>{props.text}</p>

      <i className=" fa-solid fa-trash"         onClick={()=>{
          props.onDelete(props.id)
        }}></i>
    </div>
  );
}

export default Note;
