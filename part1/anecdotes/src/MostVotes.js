const MostVotes = ({ points, anecdotes, hasVote }) => {
  if (!hasVote) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <div>no votes yet!</div>
      </>
    )
  }

  const retrieveHighestVoteAnecdote = () =>
    Object.keys(points).reduce((x, y) => (points[x] > points[y] ? x : y))
  const obj = retrieveHighestVoteAnecdote()
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[obj]}</div>
      <div>
        has {points[obj]} vote{points[obj] === 1 ? '' : 's'}
      </div>
    </>
  )
}

export default MostVotes
