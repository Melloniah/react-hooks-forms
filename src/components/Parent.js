import React, { useState } from "react";
import Form from "./Form";

function Parent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");


function handleFirstNameChange(event){
  setFirstName(event.target.value)
  
}

function handleLastNameChange(event){
  setLastName(event.target.value)
}
return(
    <Form 
    firstName={firstName}
    lastName={lastName}
    handleFirstNameChange={handleFirstNameChange}
    handleLastNameChange={handleLastNameChange}
        
    />
)
}
export default Parent