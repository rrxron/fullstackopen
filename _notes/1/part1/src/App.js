import { useState } from 'react'
import Button from './Button'
import Display from './Display'

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand"></Button>
      <Button handleClick={() => setToValue(0)} text="reset"></Button>
      <Button
        handleClick={() => setToValue(value + 1)}
        text="increment"
      ></Button>
    </div>
  )
}

export default App
