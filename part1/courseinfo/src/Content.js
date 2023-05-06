import Part from './Part'

const Content = (props) => (
  <div>
    <Part n={props.parts[0].name} e={props.parts[0].exercises} />
    <Part n={props.parts[1].name} e={props.parts[1].exercises} />
    <Part n={props.parts[2].name} e={props.parts[2].exercises} />
  </div>
)

export default Content
