import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [feedbacks, setFeedbacks] = useState([])

  const updatePositive = (feedbackValue) => {
    if (feedbackValue.length > 0) {
      const goodOnly = feedbackValue.filter((i) => i === 'G')
      setPositive((goodOnly.length / feedbackValue.length) * 100)
    }
  }

  const updateAverage = (latestGood, latestBad, currentFeedbacks) => {
    const finalScore = latestGood - latestBad
    setAverage(((finalScore / currentFeedbacks.length) * 100) / 100)
  }

  const goodHandler = () => {
    const updatedValue = good + 1
    setGood(updatedValue)
    const feedbackValue = feedbacks.concat('G')
    setFeedbacks(feedbackValue)
    updatePositive(feedbackValue)
    updateAverage(updatedValue, bad, feedbackValue)
  }

  const neutralHandler = () => {
    const updatedValue = neutral + 1
    setNeutral(updatedValue)
    const feedbackValue = feedbacks.concat('N')
    setFeedbacks(feedbackValue)
    updatePositive(feedbackValue)
  }

  const badHandler = () => {
    const updatedValue = bad + 1
    setBad(updatedValue)
    const feedbackValue = feedbacks.concat('B')
    setFeedbacks(feedbackValue)
    updatePositive(feedbackValue)
    updateAverage(good, updatedValue, feedbackValue)
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={goodHandler}>good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {feedbacks.length}</div>
      <div>average {average}</div>
      <div>positive {positive}%</div>
    </>
  )
}

export default App
