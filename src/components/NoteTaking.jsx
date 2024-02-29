import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from "../hooks/useNotes";

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();
  const [filter, setFilter] = useState("Search");
  const [editText, setEditText] = useState(" ");
  const [editID, setEditID] = useState(null);
  const [titles, setTitles] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmit = (e, title, content) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, content });
    setTitles("");
    setTextArea("");

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
        />
      
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
          <button type="submit">Submit</button>
      </form>

      
    </>
  );
}
