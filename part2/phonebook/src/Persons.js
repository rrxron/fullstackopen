const Persons = ({ filtered_person, delete_item }) => {
  return (
    <div>
      {filtered_person.map(({ name, number, id }) => {
        return (
          <div key={id}>
            <span>
              {name} {number} &nbsp;
            </span>
            <button onClick={delete_item(id, name)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Persons
