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
  </>
)

const Course = ({ course }) => {
  const parts = course.parts
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
    </>
  )
}

export default Course
