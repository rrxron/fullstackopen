import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    if (persons.some(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
        })
      )
      setNewName('')
      setNewNumber('')
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
