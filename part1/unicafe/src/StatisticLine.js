const StatisticLine = ({ text, value, prefix = '' }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value} {prefix}
    </td>
  </tr>
)

export default StatisticLine
