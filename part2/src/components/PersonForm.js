import React from "react";

const PersonForm = ({
  onFormSubmit,
  onNameInputChange,
  onNumberInputChange,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        name: <input onChange={onNameInputChange} />
      </div>
      <div>
        number: <input onChange={onNumberInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
