import axios from 'axios'

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${process.env.REACT_APP_API_KEY}`

const getData = (capital) =>
  axios.get(`${baseUrl}&q=${capital}`).then((response) => response.data)

const weatherService = { getData }

export default weatherService
