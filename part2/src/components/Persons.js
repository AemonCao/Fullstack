import React from "react";
import Person from "./Person";

const Persons = ({ persons, onRemoveButtonClick }) => {
  return persons.map((person) => (
    <Person
      key={person.name}
      person={person}
      onRemoveButtonClick={() => onRemoveButtonClick(person)}
    ></Person>
  ));
};

export default Persons;
