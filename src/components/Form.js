import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" id="first"onChange={handleFirstNameChange} value={firstName} />
      <input type="text" id="last"onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
