import React from "react";
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
      {props.list.map((a, index) => (
        <Part key={index} part={a.part} exercises={a.exercises}></Part>
      ))}
    </div>
  );
};

const Total = (props) => (
  <p>Number of exercises {props.exercisesList.reduce((a, b) => a + b)}</p>
);

const App = () => {
  const course = "Half Stack application development";
  const List = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];
  return (
    <div>
      <Header course={course} />
      <Content list={List} />
      <Total exercisesList={List.map((a) => a.exercises)}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
