import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <h2>Numbers</h2>
        <div>
          {persons.map(({ name, number }) => (
            <div key={name}>
              {name} {number}
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default App
