import { useState, useEffect } from 'react'

import FindCountry from './components/FindCountry'
import ErrorMessage from './components/ErrorMessage'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

import countriesService from './services/countries.js'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [searchedCountry, setSearchedCountry] = useState([])
  const [noDisplay, setNoDisplay] = useState(true)

  useEffect(() => {
    countriesService.getAllCountries().then((countries) => {
      setAllCountries(countries)
    })
  }, [])

  useEffect(() => {
    if (searchTerm === '') {
      setNoDisplay(true)
    }
  }, [searchTerm])

  const countryHandler = (e) => {
    setSearchedCountry([])
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    if (allCountries.length > 0) {
      setSearchedCountry(
        allCountries.filter(
          (country) => country.name.official.toLowerCase().indexOf(term) !== -1
        )
      )
      setNoDisplay(false)
    } else {
      setNoDisplay(true)
    }
  }

  return (
    <>
      <FindCountry value={searchTerm} countryHandler={countryHandler} />
      {noDisplay ? null : searchedCountry.length > 10 ? (
        <ErrorMessage />
      ) : searchedCountry.length === 1 ? (
        <CountryDetail
          name={searchedCountry[0].name.common}
          capital={searchedCountry[0].capital}
          area={searchedCountry[0].area}
          languages={searchedCountry[0].languages}
          flag={searchedCountry[0].flags.png}
        />
      ) : searchedCountry.length > 0 ? (
        <CountryList countries={searchedCountry} />
      ) : null}
    </>
  )
}

export default App
