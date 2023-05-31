import React, { useEffect } from "react";
import { useAddUserData } from "./UserService";

export const AddUserService = () => {
  const { isIdle, isLoading, isError, isSuccess, data, error, mutate } =
    useAddUserData();

  const submit = async () => {
    var data = {
        name: "test",
        email: "test@gmail.com",
        age:20,
        isActive:true
    }
    mutate(data);
  };
  useEffect(() => {
    console.log("isIdle", isIdle);
    console.log("data **", data);
    console.log("isLoading", isLoading);
    console.log("isError", isError);
  }, [isLoading]);

  return <div>
    <button onClick={submit}>Add User</button>
  </div>;
};
