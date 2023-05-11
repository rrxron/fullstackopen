const Filter = ({ filterValue, handleFilterChange }) => (
  <div>
    filter shown with{' '}
    <input value={filterValue} onChange={handleFilterChange} />
  </div>
)

export default Filter
