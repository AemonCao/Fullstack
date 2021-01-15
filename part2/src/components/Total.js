import React from "react";

const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((a, b) => a + b);
  return <b>Number of {total} exercises</b>;
};

export default Total;
