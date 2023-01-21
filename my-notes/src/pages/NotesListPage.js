import React from 'react'
import notes from '../assets/data'
import NoteComponent from '../components/NoteComponent'

const NotesListPage = () => {
  return (
    <div>
      {notes.map((note, index) => 
        <NoteComponent key={index} note={note}></NoteComponent>
      )}
    </div>
  )
}

export default NotesListPage
