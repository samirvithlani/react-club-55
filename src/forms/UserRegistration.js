import React, { useState } from "react";

export const UserRegistration = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nameerror, setnameerror] = useState('')
  const [error, seterror] = useState({})
  const nameHandler = (e) => {
    console.log(e);
    console.log(e.target.value);
    setname(e.target.value);
    if(e.target.value.length<5){

        var nameError ={
            message:'Name must be 5 characters'
        }
        seterror(nameError)
        
      //setnameerror('Name must be 5 characters')
    }
    else{
        //setnameerror('')
    }
  };
  const submit =(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
  }
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={(e)=>{submit(e)}}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              nameHandler(e);
            }}
          />
          {error.nameError}
          {
                error.message ? <div style={{color:'red'}}>{error.message}</div> : null
          }
          {name}
        </div>
        <div>
          <label htmlFor="name">EMAIL</label>
          <input type="text" onChange={(e)=>{setemail(e.target.value)}} />
          {email}
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
