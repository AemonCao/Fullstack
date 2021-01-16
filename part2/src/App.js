import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");

  const filterPersons = persons.filter(
    (person) =>
      person.name.toUpperCase().indexOf(filterWord.toUpperCase()) !== -1
  );

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
  };

  const handleFilterWordChange = (event) => {
    setFilterWord(event.target.value);
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setnewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterInputChange={handleFilterWordChange.bind(this)} />
      <h2>add a new</h2>
      <PersonForm
        onFormSubmit={addPerson.bind(this)}
        onNameInputChange={handleNewNameChange.bind(this)}
        onNumberInputChange={handleNewNumberChange.bind(this)}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} />
    </div>
  );
};

export default App;
