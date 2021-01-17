import React from "react";

const Person = ({ person, onRemoveButtonClick }) => (
  <div>
    {person.name} {person.number}
    <button onClick={onRemoveButtonClick}>remove</button>
  </div>
);
export default Person;
