import { useState } from 'react'
import MostVotes from './MostVotes'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })
  const [hasVote, setHasVote] = useState(false)

  const retrieveAnecdote = () => {
    const index = parseInt((Math.random() * (anecdotes.length - 1)).toFixed())
    setSelected(index)
  }

  const handleVote = () => {
    const newObj = { ...points, [selected]: points[selected] + 1 }
    setPoints(newObj)
    setHasVote(true)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={retrieveAnecdote}>next anecdote</button>
      </div>
      <MostVotes points={points} anecdotes={anecdotes} hasVote={hasVote} />
    </div>
  )
}

export default App
