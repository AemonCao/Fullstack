import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const all = () => goodValue + neutralValue + badValue;

  if (all() === 0) {
    return <h4>No feedback given</h4>;
  }

  const average = () => (goodValue - badValue) / all();

  const positive = () => goodValue / all();

  return (
    <table>
      <tbody>
        <Display text="good" value={goodValue}></Display>
        <Display text="neutral" value={neutralValue}></Display>
        <Display text="bad" value={badValue}></Display>
        <Display text="all" value={all()}></Display>
        <Display text="average" value={average()}></Display>
        <Display text="positive" value={positive() + "%"}></Display>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButtonClick = () => {
    setGood(good + 1);
  };

  const handleNeutralButtonClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadButtonClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodButtonClick}></Button>
      <Button text="neutral" onClick={handleNeutralButtonClick}></Button>
      <Button text="bad" onClick={handleBadButtonClick}></Button>
      <h1>statistics</h1>
      <Statistics
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
      ></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
