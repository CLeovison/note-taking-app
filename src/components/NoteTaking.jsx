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
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title: titles, content: textArea });
    setTitles("");
    setTextArea("");
  };
  const handleDelete = (id) =>{
    dispatch({type: "DELETE_NOTE", id})

  }

  return (
    <>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
          required
        />

        <textarea
          value={textArea}
          className={styles.textarea}
          onChange={(e) => setTextArea(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className={styles.maincontent}>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {editID !== note.id && (
                <>
                  <label>{note.title}</label>
                  <span>{note.content}</span>
                </>
              )}
              <button onClick={e => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
