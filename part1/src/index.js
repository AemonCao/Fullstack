import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = (props) => {
  return (
    <div>
      {props.parts.map((a, index) => (
        <Part key={index} part={a.name} exercises={a.exercises}></Part>
      ))}
    </div>
  );
};

const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.parts.map((a) => a.exercises).reduce((a, b) => a + b)}
  </p>
);

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(100);
  setTimeout(() => setCounter(counter + 1), 1000);
  console.log('rendering...', counter)
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <div>{counter}</div>
      <Hello name={"Aemon"} age={25}></Hello>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
