import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateNote = () => {
    if (editIndex !== null) {

      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? { title: noteTitle, content: noteInput } : note
      );
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {

      setNotes([...notes, { title: noteTitle, content: noteInput }]);
    }
    setNoteInput("");
    setNoteTitle("");
  };

  const handleEdit = (index) => {
    setNoteTitle(notes[index].title);
    setNoteInput(notes[index].content);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="note-input">
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Title"
          className="title-input"
        />
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Take a note..."
          className="content-input"
        ></textarea>
        <button onClick={handleAddOrUpdateNote} className="add-button">+</button>
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div className="note-card" key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="note-actions">
              <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
