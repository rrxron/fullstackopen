const CountryDetail = ({ name, capital, area, languages, flag }) => {
  const languagesList = () => {
    const api_key = process.env.REACT_APP_API_KEY

    console.log(api_key)

    const languageList = []
    for (let k in languages) {
      languageList.push(languages[k])
    }
    return languageList
  }

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
      <h1 key={'weather_in_' + capital}>Weather in {capital}</h1>
      <div>temperature {1}</div>
      <div>icon {2}</div>
      <div>wind {3}</div>
    </div>
  )
}

export default CountryDetail
