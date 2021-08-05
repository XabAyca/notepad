import React from 'react';

const Note = ({ note, onDeleteNote, setActiveNote, activeNote }) => {

  return (
    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
      <div className="sidebar-note-title">
        <strong>{note.title}</strong>
        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
      </div>
      <p>{note.body && note.body.substr(0, 100) + "..."}</p>
      <small className="note-meta ">
        Last modified {new Date(note.lastModified).toLocaleDateString("fr", {
          hour: "2-digit",
          minute: "2-digit"
        })}
      </small>
    </div>
  )
}

export default Note 