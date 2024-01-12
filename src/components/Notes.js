import React, { useState } from "react";
import notes from "../Constant/notes";

const Notes = () => {
  return (
    <div className="notes__Container">
      {notes.map((note) => {
        return (
          <div className="note__container" key={note.key}>
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
