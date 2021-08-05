import React from 'react'
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

const Main = ({ activeNote, onUpdatedNote }) => {



  if (!activeNote) return <div className="no-active-note">No note selected</div>

  return (
    <div className="app-main">
      <NoteDisplay activeNote={activeNote} />
      <MarkdownInput activeNote={activeNote} onUpdatedNote={onUpdatedNote}/>
    </div>
  )
}

export default Main