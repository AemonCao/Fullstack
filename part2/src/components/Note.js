import React from "react";

const Note = ({ note }) => (
  <li>
    {note.important ? <b>{note.content}</b> : <span>{note.content}</span>}
  </li>
);

export default Note;
