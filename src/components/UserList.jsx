import React from "react";

export const UserList = (props) => {
  console.log(props.users);
  return (
    <div>
      <h3>{props.title}</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">ACtion</th>
          </tr>
        </thead>
        <tbody>
          {props.users?.map((u) => {
            return (
              <tr>
                <th scope="row">{u.id}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td><button onClick={()=>{props.delete(u.id)}} className ="btn btn-danger">DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>{props.test("data")}}>test</button>
    </div>
  );
};
