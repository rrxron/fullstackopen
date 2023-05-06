import Header from './Header'
import Content from './Content'
import Total from './Total'

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Content
        p1={part1.name}
        e1={part1.exercises}
        p2={part2.name}
        e2={part2.exercises}
        p3={part3.name}
        e3={part3.exercises}
      />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>
  )
}

export default App
