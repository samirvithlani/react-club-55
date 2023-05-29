import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//axios npm i axios , fetch

export const APiDemo3 = () => {
    const [users, setusers] = useState([])
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    setusers(res.data.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
    console.log(res.data);
    getUserData();
  }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return(
                        <tr>
                            <th scope="row">{user._id}</th>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={()=>deleteUser(user._id)} className="btn btn-danger">Delete</button>
                                <Link to ={`/userupdate/${user._id}`} className = "btn btn-info">UPDATE</Link>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
      </table>
    </div>
  );
};
