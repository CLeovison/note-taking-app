import React, { useState } from "react";
// add curly braces to useNotes import
import { useNotes } from "../hooks/useNotes";
import styles from "../components/mains.module.css";

export default function NoteTaking() {
  const { notes, dispatch } = useNotes();

  const [editID, setEditID] = useState(null);
  const [titles, setTitles] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title: titles, content: textArea });
    setTitles("");
    setTextArea("");
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_NOTE", id });
  };
  const handleSave = (id) => {
    dispatch({ type: "EDIT_NOTE", id: id, title: titles, content: textArea });
    setEditID(null);
  };
  const handleEdit = (id, title, content) => {
    setEditID(id);
    setTitles(title);
    setTextArea(content);
  };

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
              {editID === note.id && (
                <>
                  <input
                    type="text"
                    onChange={(e) => setTitles(e.target.value)}
                    defaultValue={note.title}
                  />
                  <textarea
                    onChange={(e) => setTextArea(e.target.value)}
                    defaultValue={note.content}
                  />
                  <button onClick={(e) => handleSave(note.id)}>Save</button>
                </>
              )}
              {editID !== note.id && (
                <>
                  <button
                    onClick={(e) =>
                      handleEdit(note.id, note.title, note.content)
                    }
                  >
                    Edit{" "}
                  </button>
                </>
              )}
              <button onClick={(e) => handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
