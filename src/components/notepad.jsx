import React, { useState } from "react";

function Notepad(props) {
  const [isTitle , setIsTitle]=useState(false)
  const [noteBox , setNoteBox]=useState(false)
  const [notee, setNotee] = useState({
    title: "",
    text: "",
  });
  
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    // e.preventDefault();
    
    const { name, value } = e.target;
    setNotee((prenote) => {
      return {
        ...prenote,
        [name]: value,
      };
    });
  }
  function handleClick(){
    setNoteBox(true)
    setIsTitle(true)
  }
  return (
    <div className="notepad">
      <div className="textForm">
        <form onSubmit={handleSubmit}>
          <input
          onClick={handleClick}
            value={notee.title}
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            placeholder={isTitle?"Title":"Take a note....."}
          />
          <textarea
            className={noteBox?"Unhide":"hide"}
            value={notee.text}
            onChange={handleChange}
            rows={1}
            name="text"
            id="text"
            placeholder="Take a note ...."
          />
          <button
          id="btn"
          className={noteBox?"Unhide":"hide"}
            type="button"
            onClick={() => {
              if(notee.text.length >=1 || notee.title.length>=1){
                props.onAdd(notee);
                setNotee({
                  title:"",
                  text:"",
                })
              }

              setNoteBox(false);
              setIsTitle(false);
            }}
            
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Notepad;
