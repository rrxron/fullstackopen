const CountryList = ({ countries }) => (
  <div>
    {countries
      ? countries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))
      : null}
  </div>
)

export default CountryList
