import axios from 'axios'

const baseURL = `http://localhost:3001/persons`

const getBaseUrl = () => baseURL

const get = () =>
  axios.get(`${getBaseUrl()}/`).then((response) => response.data)

const create = (newObject) =>
  axios.post(`${getBaseUrl()}/`, newObject).then((response) => response.data)

const update = (id, updatedObject) =>
  axios
    .put(`${getBaseUrl()}/${id}`, updatedObject)
    .then((response) => response.data)

const remove = (id) => axios.delete(`${getBaseUrl()}/${id}`).then(() => true)

const phonebookService = { get, create, update, remove }

export default phonebookService
