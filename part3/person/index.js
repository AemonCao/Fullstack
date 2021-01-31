const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

morgan.token("json", function (req, res) {
  return JSON.stringify(req.body);
});

// 每当 express 收到一个 HTTP GET 请求时，它都会首先检查build 目录是否包含与请求地址对应的文件。
app.use(express.static("build"));
// 跨域
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :json")
);
app.use(express.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "13-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendick",
    number: "39-23-6423122",
    id: 4,
  },
];

const generateId = () => {
  return Math.ceil(Math.random() * 100000000);
};

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (requset, response) => {
  const id = Number(requset.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (requset, response) => {
  const body = requset.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  } else if (persons.find((person) => person.name === body.name)) {
    return response.status(409).json({
      error: `${body.name} is already added to phonebook`,
    });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
