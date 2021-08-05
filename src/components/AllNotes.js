import React from 'react';
import Note from './Note';

const AllNotes = ({ notes, onAddNote, onDeleteNote, setActiveNote, activeNote }) => {

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)


  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <Note
            note={note}
            onDeleteNote={onDeleteNote}
            key={note.id}
            setActiveNote={setActiveNote}
            activeNote={activeNote}
          />
        ))}
      </div>
    </div>
  )
}

export default AllNotes