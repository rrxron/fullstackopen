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
      alert(`${newName} is already added to phonebook`)
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
      <Persons filtered_person={filtered_person} />
    </>
  )
}

export default App
