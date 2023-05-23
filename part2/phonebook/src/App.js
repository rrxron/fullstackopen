import { useState, useEffect } from 'react'

import phonebookService from './services/phonebook'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    phonebookService
      .get()
      .then((existing_persons) => setPersons(existing_persons))
      .catch((e) => console.log(e))
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    if (persons.some(({ name }) => name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace old number with a new one?`
        )
      ) {
        const person_found = persons.find((person) => person.name === newName)
        if (person_found) {
          phonebookService
            .update(person_found.id, { ...person_found, number: newNumber })
            .then((updated_person) => {
              setPersons(
                persons.map((person) =>
                  person.id === updated_person.id ? updated_person : person
                )
              )
              setNewName('')
              setNewNumber('')
            })
            .catch((e) => console.log(e))
        }
      }
    } else {
      phonebookService
        .create({
          name: newName,
          number: newNumber,
        })
        .then((new_person) => {
          setPersons(persons.concat(new_person))
          setNewName('')
          setNewNumber('')
        })
        .catch((e) => console.log(e))
    }
  }

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  const handleFilterChange = (e) => setFilterValue(e.target.value)

  const filtered_person =
    filterValue === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().startsWith(filterValue.toLowerCase())
        )

  const delete_item = (id, name) => () => {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookService
        .remove(id)
        .then((deleted) => {
          if (deleted) {
            setPersons(persons.filter((person) => person.id !== id))
          }
        })
        .catch((e) => console.log(e))
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleForm={handleForm}
      />
      <h3>Numbers</h3>
      <Persons filtered_person={filtered_person} delete_item={delete_item} />
    </>
  )
}

export default App
