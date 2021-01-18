import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 1000,
    content: "This note is not saved to server",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
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
