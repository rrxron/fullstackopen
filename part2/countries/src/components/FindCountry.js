const FindCountry = ({ value, countryHandler }) => {
  return (
    <div>
      <label htmlFor="country">find countries </label>
      <input
        type="text"
        id="country"
        name="country"
        value={value}
        onChange={countryHandler}
      />
    </div>
  )
}

export default FindCountry
