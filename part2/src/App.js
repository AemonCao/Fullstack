import React, { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const filterPersons = persons.filter(
    (person) =>
      person.name.toUpperCase().indexOf(filterWord.toUpperCase()) !== -1
  );

  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find((p) => p.name === newName);
    if (person) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phonebookService
          .update(person.id, { ...person, number: newNumber })
          .then((response) => {
            setPersons(persons.map((p) => (p.id !== person.id ? p : response)));
          })
          .catch((error) => {
            setErrorMessage(error.response.data.error);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      phonebookService
        .create({ name: newName, number: newNumber })
        .then((response) => {
          setPersons(persons.concat(response));
          setSuccessMessage(`Added ${response.name}`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
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

  const handleRemoveButtonClick = (person) => {
    if (window.confirm(`remove ${person.name}?`))
      phonebookService
        .remove(person.id)
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== person.id));
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${person.name} has alredy been removed from server`
          );
          setPersons(persons.filter((p) => p.id !== person.id));
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type="success" />
      <Notification message={errorMessage} type="error" />
      <Filter onFilterInputChange={handleFilterWordChange.bind(this)} />
      <h2>add a new</h2>
      <PersonForm
        onFormSubmit={addPerson.bind(this)}
        onNameInputChange={handleNewNameChange.bind(this)}
        onNumberInputChange={handleNewNumberChange.bind(this)}
      />
      <h2>Numbers</h2>
      <Persons
        persons={filterPersons}
        onRemoveButtonClick={handleRemoveButtonClick}
      />
    </div>
  );
};

export default App;
