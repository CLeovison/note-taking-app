import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from '../hooks/useNotes'

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();
  const [filter, setFilter] = useState("Search");
  const [editText, setEditText] = useState(" ");
  const [editID, setEditID] = useState(null);
  const [title, setTitle] = useState("")

  const handleEdit = (id, text) => {
    setEditID(id);
    setEditText(text);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: "ADD_NOTE", title, content})
    setTitle("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>

      <div className="main-content">
      
        <ul>
          {/* {notes.map((note) => (
            <li></li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
