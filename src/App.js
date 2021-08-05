import AllNotes from 'components/AllNotes';
import Main from 'components/Main';
import React from 'react';
import uuid from 'react-uuid';

const App = () => {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = React.useState(false)
  
  React.useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes))
  }, [notes])

  const onAddNote = () => {
    const newNote = { 
      id: uuid(),
      title: "Untitled Note",
      body:"",
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes ])
  }

  const onUpdatedNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotesArray)
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note)=> note.id !== idToDelete))
  }
  
  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote)
  }

  return (
    <div className="App">
      <AllNotes
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdatedNote={onUpdatedNote}/>
    </div>
  )
}

export default App;
