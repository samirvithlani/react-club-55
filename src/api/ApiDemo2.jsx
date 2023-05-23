import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//axios
export const ApiDemo2 = () => {
  const [users, setusers] = useState([]);
  const getUserData = async () => {
    try{
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    setusers(res.data.data);
    }catch(err){
        console.log(err)
        alert("server down...")
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const deleteuser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log("delete...", res.data);
    console.log("delete...", res.status);
    if (res.status == 204) {
      toast.success("🦄 Wow so easy!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getUserData();
    } else {
      getUserData();
    }
  };

  var style = {
    true: {
      color: "green",
    },
    false: {
      color: "red",
    },
  };
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>API DEMO2</h1>
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
                <td>
                  {user.isActive ? (
                    <span style={style.true}>TRUE</span>
                  ) : (
                    <span style={style.false}>FALSE</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteuser(user._id)}
                  >
                    DELETE
                  </button>
                  <Link to = {`/updateuser/${user._id}`} className="btn btn-info">update</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
