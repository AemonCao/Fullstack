import React from "react";

const Note = ({ note, toggleImportance }) => {
  const lable = note.important ? "make not important" : "make important";
  return (
    <li>
      {note.important ? <b>{note.content}</b> : <span>{note.content}</span>}
      <button onClick={toggleImportance}>{lable}</button>
    </li>
  );
};

export default Note;
