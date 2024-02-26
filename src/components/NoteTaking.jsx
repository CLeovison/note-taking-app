import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from '../hooks/useNotes'

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();
  const [filter, setFilter] = useState("Search");
  const [editText, setEditText] = useState(" ");
  const [editID, setEditID] = useState(null);

  const handleEdit = (id, text) => {
    setEditID(id);
    setEditText(text);
  };
  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
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
