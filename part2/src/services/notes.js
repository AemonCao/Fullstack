import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
  return axios.get(baseUrl).then((response) => {
    return response.data;
  });
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => {
    return response.data;
  });
};

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data);
};

const noteService = { getAll, create, update };

export default noteService;
