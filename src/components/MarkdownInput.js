import React from 'react';

const MarkdownInput = ({activeNote, onUpdatedNote}) => {

  const onEditField = (key, value) => {
    onUpdatedNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now()
    })
  }
  
  return (
    <div className="app-main-note-edit">
      <input type="text" id='title' value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus></input>
      <textarea id='body' value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} placeholder="Write your note in Markdown here..."></textarea>
    </div>
  )
}

export default MarkdownInput