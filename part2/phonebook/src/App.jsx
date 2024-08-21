import { useState, useEffect } from "react";
import personsService from "./services/persons";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageStyle, setMessageStyle] = useState({
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  });

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map((person) => person.name);
    if (names.includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personObject = {
          name: newName,
          number: newNumber,
        };
        const updateId = persons.find((p) => p.name === newName).id;
        personsService.update(updateId, personObject).then((returnedPerson) => {
          setMessageStyle({ ...messageStyle, color: "green" });
          setMessage(`Changed ${newName}'s phone number to ${newNumber}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(
            persons.map((p) => (p.id !== updateId ? p : returnedPerson))
          );
        });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personsService.create(personObject).then((returnedPerson) => {
        setMessageStyle({ ...messageStyle, color: "green" });
        setMessage(`Added ${newName}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then((deletedPerson) => {
          setMessageStyle({ ...messageStyle, color: "green" });
          setMessage(`Deleted ${name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id !== deletedPerson.id));
        })
        .catch((error) => {
          setMessageStyle({ ...messageStyle, color: "#FF0000" });
          setMessage(
            `Information for ${name} has already been removed from server`
          );
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id !== id));
        });
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} messageStyle={messageStyle} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
