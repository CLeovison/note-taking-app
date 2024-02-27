import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from "../hooks/useNotes";

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();
  const [filter, setFilter] = useState("Search");
  const [editText, setEditText] = useState(" ");
  const [editID, setEditID] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = (e, title, content) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, content });
    setTitle("");
 
  };
  // const handleEdit = (id, text) => {
  //   setEditID(id);
  //   setEditText(text);
  // };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>

      <div className="main-content">
   
    
      </div>
          <ul>
          {notes.map((note) => (
            <li key={note.id}>
          
              <span>{title}</span>
            </li>
            
          ))}
        </ul>
    </>
  );
}
