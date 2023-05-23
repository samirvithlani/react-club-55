import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateUser = () => {
  var id = useParams().id;
  var navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id);
      return {
        name: res.data.data.name,
        email: res.data.data.email,
        age: res.data.data.age,
        isActive: res.data.data.isActive,
      };
    },
  });
  const submit = async (data) => {
    // console.log(data);
    var userobj = {
      name: data.name,
      email: data.email,
      age: data.age,
      isActive: data.isActive == "true" ? true : false,
    };
    console.log(userobj);

    const res = await axios.put(
      "https://node5.onrender.com/user/user/" + id,
      userobj
    );
    console.log(res.data);
    console.log(res.status);

    if (res.status == 200) {
      toast.success("🦄 Wow so easy!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/apidemo2");
      }, 3000);
    }
  };
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="text" {...register("age", { required: true })} />
        </div>
        <div>
          <label htmlFor="">isActive</label>
          <input
            type="radio"
            {...register("isActive", { required: true })}
            value="true"
          />
          true
          <input
            type="radio"
            {...register("isActive", { required: true })}
            value="false"
          />
          false
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
