import axios from 'axios'

const baseURL = `http://localhost:3001`

const getBaseUrl = () => baseURL

const get = () =>
  axios.get(`${getBaseUrl()}/persons`).then((response) => response.data)

const create = (newObject) =>
  axios
    .post(`${getBaseUrl()}/persons`, newObject)
    .then((response) => response.data)

const remove = (id) =>
  axios.delete(`${getBaseUrl()}/persons/${id}`).then(() => true)

const phonebookService = { get, create, remove }

export default phonebookService
