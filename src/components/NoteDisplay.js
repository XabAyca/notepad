import React from 'react';
import Showdown from 'showdown';



const NoteDisplay = ({ activeNote }) => {
  
  const converter = new Showdown.Converter();

  const createMarkdown = () => {
    return { __html: converter.makeHtml(activeNote.body) }
  }

  return (
    <div className="app-main-note-preview">
      <h1 className="preview-title">{activeNote.title}</h1>
      <div className="markdown-preview" dangerouslySetInnerHTML={createMarkdown()}>
      </div>
    </div>
  )
}

export default NoteDisplay