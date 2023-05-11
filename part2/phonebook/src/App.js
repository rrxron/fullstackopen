import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <h2>Numbers</h2>
        <div>
          {persons.map(({ name }) => (
            <div key={name}>{name}</div>
          ))}
        </div>
      </form>
    </>
  )
}

export default App
