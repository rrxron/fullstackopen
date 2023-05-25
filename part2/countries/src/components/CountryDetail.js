import { useEffect, useState } from 'react'

import weatherService from '../services/weather'

const CountryDetail = ({ name, capital, area, languages, flag }) => {
  const [weatherData, setWeatherData] = useState(null)

  const languagesList = () => {
    const languageList = []
    for (let k in languages) {
      languageList.push(languages[k])
    }
    return languageList
  }

  useEffect(() => {
    weatherService.getData(capital[0]).then((data) => {
      setWeatherData({
        wind: data.wind.speed,
        temp: data.main.temp,
        weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })
    })
  }, [capital])

  return (
    <div>
      <h1 key={name}>{name}</h1>
      <div key={'capital_' + capital}>capital {capital}</div>
      <div key={area}>area {area}</div>
      <br />
      <div>
        <strong>languages:</strong>
        <ul>
          {languagesList().map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <img key={flag} src={flag} alt={name}></img>
      </div>
      {weatherData ? (
        <div>
          <h1 key={'weather_in_' + capital}>Weather in {capital}</h1>
          <div key={weatherData.temp + ' Celcius'}>
            temperature {weatherData.temp} Celcius
          </div>
          <div key={weatherData.weatherIcon}>
            <img alt="weather-icon" src={weatherData.weatherIcon}></img>
          </div>
          <div key={weatherData.wind + ' m/s'}>wind {weatherData.wind} m/s</div>
        </div>
      ) : null}
    </div>
  )
}

export default CountryDetail
