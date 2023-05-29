const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

app.use(express.json())

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  )
})

const findPerson = (idToFind) => persons.find((p) => p.id === idToFind)

app.get('/api/persons/:id', (request, response) => {
  const foundPerson = findPerson(Number(request.params.id))
  if (!foundPerson) {
    return response.status(404).json({ error: 'record not found' })
  }
  response.json(foundPerson)
})

app.delete('/api/persons/:id', (request, response) => {
  const idToFind = Number(request.params.id)
  const foundPerson = findPerson(idToFind)
  if (!foundPerson) {
    return response.status(404).json({ error: 'record not found' })
  }
  persons = persons.filter((p) => p.id !== idToFind)
  response.status(204).end()
})

app.post('/api/persons/', (request, response) => {
  const reqBody = request.body
  if (!reqBody.name || !reqBody.number) {
    response.status(400).json({ error: 'please check parameters' })
  } else {
    const foundPerson = persons.find(
      (p) => p.name.toLowerCase().trim() === reqBody.name.toLowerCase().trim()
    )
    if (foundPerson) {
      response.status(400).json({ error: 'name must be unique' })
    } else {
      const newId = Math.floor(Math.random() * 999999999)
      persons = persons.concat({
        id: newId,
        name: reqBody.name,
        number: reqBody.number,
      })
      response.status(201).json({ message: 'success in creating new person' })
    }
  }
})

app.listen(3001, () => console.log(`phonebook backend running`))
