import React from "react";

const Filter = ({ onFilterInputChange }) => {
  return (
    <>
      filter shown with
      <input onChange={onFilterInputChange} />
    </>
  );
};

export default Filter;
