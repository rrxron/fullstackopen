import { useState } from 'react'
import CountryDetail from './CountryDetail'

const CountryList = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null)
  const handleShow = (country) => () => setCurrentCountry(country)

  return (
    <div>
      {countries
        ? countries.map((country) => (
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={handleShow(country)}>show</button>
            </div>
          ))
        : null}
      {currentCountry ? (
        <CountryDetail
          name={currentCountry.name.common}
          capital={currentCountry.capital}
          area={currentCountry.area}
          languages={currentCountry.languages}
          flag={currentCountry.flags.png}
        />
      ) : null}
    </div>
  )
}

export default CountryList
