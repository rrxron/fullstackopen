const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
)

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
)

const Course = ({ course }) => {
  const parts = course.parts
  const total = parts.reduce((acc, obj) => acc + obj.exercises, 0)
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={total} />
    </>
  )
}

export default Course
