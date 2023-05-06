import Part from './Part'

const Content = (props) => (
  <div>
    <Part p={props.p1} e={props.e1} />
    <Part p={props.p2} e={props.e2} />
    <Part p={props.p3} e={props.e3} />
  </div>
)

export default Content
