import React, { useState } from "react";

const Person = ({ person }) => (
  <div>
    {person.name} {person.number}
  </div>
);

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
      filter shown with <input onChange={handleFilterWordChange} />
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons.map((person) => (
        <Person key={person.name} person={person}></Person>
      ))}
    </div>
  );
};

export default App;
