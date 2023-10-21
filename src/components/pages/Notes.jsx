import React, { useEffect, useState } from "react";
import { useNotes } from "../../context/noteContext";
import { Link } from "react-router-dom";
import "../../assets/css/notes.css";

export const Notes = () => {
  const { getNotes, notes, deleteNotes } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const handleEditNote = (note) => {
    setIsEditing(true);
    setNoteToEdit(note);
  };

  const handleDeleteNote = (noteId) => {
    deleteNotes(noteId);
  };

  return (
    <div className="general__card">
      {notes.map((note) => (
        <div className="card" key={note._id}>
          <div className="card__header">
            <h2 className="card__h2">{note.title}</h2>

          </div>
          <div className="card__body">
            <span className="card__span">{note.info}</span>
            <span className="card__span">{note.name}</span>
            <span className="card__span">{note.timeElapsed}</span>
          </div>
          <div className="card__footer">
          <Link
              to="/createNote"
              state={{ noteToEdit: note }}
            >
              <button className="card__button card__button-edit">
                Editar Nota
              </button>
            </Link>
            <button
              className="card__button card__button-delete"
              onClick={() => handleDeleteNote(note._id)}
            >
              Borrar Nota
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
