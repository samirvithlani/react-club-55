import React, { useState } from "react";

export const EmployeeRegistrationForm = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const fNameHandler = (e) => {
    //console.log(e)
    console.log(e.target.value);
    setfname(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    //alert(`First Name: ${fname} Last Name: ${lname}`);
    console.log(`First Name: ${fname} Last Name: ${lname}`);
  };

  return (
    <div>
      <h1>EMPLOYEE REGISTRATON FORM</h1>
      <form onSubmit={submit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => {
              fNameHandler(e);
            }}
          />
          {fname}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => {
              setlname(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
