const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
    <Part part={parts[3]} />
  </>
)

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
)

const Course = ({ course }) => {
  const parts = course.parts
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        sum={
          parts[0].exercises +
          parts[1].exercises +
          parts[2].exercises +
          parts[3].exercises
        }
      />
    </>
  )
}

export default Course
