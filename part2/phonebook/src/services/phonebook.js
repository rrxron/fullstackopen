import axios from 'axios'

const baseURL = `http://localhost:3001`

const getBaseUrl = () => baseURL

const get = () =>
  axios.get(`${getBaseUrl()}/persons`).then((response) => response.data)

const create = (newObject) =>
  axios
    .post(`${getBaseUrl()}/persons`, newObject)
    .then((response) => response.data)

const phonebookService = { get, create }

export default phonebookService
