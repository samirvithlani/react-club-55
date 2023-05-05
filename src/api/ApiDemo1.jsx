import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiDemo1 = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    
    getData();
    addData();
    
  }, [])
  
  const addData = async () => {
    var user ={
        "name": "morpheus",
        "job": "leader"
    }
    const res = await axios.post("https://reqres.in/api/users",user)
    console.log(res.data);
    console.log(res.status);
  }

  const getData = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(res.data.data);
    console.log(res.status);
    setdata(res.data.data);
  };
  return (
    <div>
      ApiDemo1
      
      <table>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        {data?.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <img
                  src={item.avatar}
                  alt="avatar"
                  width="100px"
                  height="100px"
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
