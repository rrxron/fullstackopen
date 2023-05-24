import { useState, useEffect } from 'react'

import FindCountry from './components/FindCountry'
import ErrorMessage from './components/ErrorMessage'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

import countriesService from './services/countries.js'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    countriesService.getAllCountries().then((countries) => {
      setAllCountries(countries)
    })
  }, [])

  useEffect(() => {
    if (allCountries.length > 0) {
      console.log(allCountries)
      console.log(allCountries[101])
    }
  }, [allCountries])

  const countryHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <FindCountry value={searchTerm} countryHandler={countryHandler} />
      <ErrorMessage />
      <CountryList />
      <CountryDetail />
    </>
  )
}

export default App
