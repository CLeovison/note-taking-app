import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from "../hooks/useNotes";
import styles from "../components/mains.module.css";

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();
  const [filter, setFilter] = useState("Search");
  const [editText, setEditText] = useState(" ");
  const [editID, setEditID] = useState(null);
  const [titles, setTitles] = useState("");
  const [textArea, setTextArea] = useState("");


  const handleEdit = (id, text, content) => {
    setTitles(text);
    setEditID(id);
    setTextArea(content);
  };
  const handleSubmit = (e,title,content) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, content });
    setTitles("");
    setTextArea("");
  };
  return (
    <>
      <form className={styles.forms}>
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
        />

        <textarea
          value={textArea}
          className={styles.textarea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <button type="submit" onClick={handleSubmit} >Submit</button>
      </form>

      <div className={styles.maincontent}>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {editID !== note.id && (
                <label htmlFor={note.id}>{note.title}</label>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
