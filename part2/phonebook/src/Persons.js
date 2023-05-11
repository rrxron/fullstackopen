const Persons = ({ filtered_person }) => {
  return (
    <div>
      {filtered_person.map(({ name, number }) => {
        return (
          <div key={name}>
            {name} {number}
          </div>
        )
      })}
    </div>
  )
}

export default Persons
