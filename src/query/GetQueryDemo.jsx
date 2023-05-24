import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetUserData } from "./Service";

export const GetQueryDemo = () => {
  const { data, isLoading, isError,refetch,dataUpdatedAt } = useGetUserData();
  const [users, setusers] = useState([]);
  useEffect(() => {
    console.log("data...", data);
    console.log("loading...", isLoading);
    console.log("error...", isError);
    console.log("dataUpdatedAt...", dataUpdatedAt);
    
    
    if(data){
      setusers(data.data.data);
    }
  }, [isLoading]);

  return (
    <div>
      GetQueryDemo
      {
        isLoading && <div>Loading...</div>
      }
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
               
               
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button onClick={()=>refetch()}>Refetch</button> */}
      </div>
  );
};
