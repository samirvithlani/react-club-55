import React from "react";
import { useForm } from "react-hook-form";

export const StudentRegistration = () => {
  const { register, handleSubmit ,formState:{errors}} = useForm(
    {
        mode: "onBlur",
        defaultValues:async()=>{
            return({
                name: "samir",
            })
        }
        // defaultValues: {
        //     name: "samir",
        //     phone: "8460224296",
            
        // }
    }
    
    
  );
  const validationSchema = {
    name: {
        required: {
            value: true,
            message: "Name is required"
        }
    },
    phone: {
        required: {
            value: true,
            message: "Phone is required"
        },
        pattern: {
            value: /^[6-9]{1}[0-9]{9}$/,
            message: "Phone number is not valid..."
        }
    }
  }
console.log(errors);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div>
      StudentRegistration
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name",validationSchema.name)}></input>
          {
                errors.name && <div style={{color:'red'}}>{errors.name.message}</div>
          }
        </div>
        <div>
          <label htmlFor="name">Phone</label>
          <input type="text" {...register("phone",validationSchema.phone)}></input>
          {
                errors.phone && <div style={{color:'red'}}>{errors.phone.message}</div>
          }
        </div>
        <div>
          <label htmlFor="gender">GENDER</label>
          MALE :{" "}
          <input
            type="radio"
            value="MALE"
            name="GENDER"
            {...register("gender")}
          ></input>
          <br />
          FEMALE :{" "}
          <input
            type="radio"
            value="FEMALE"
            name="GENDER"
            {...register("gender")}
          ></input>
        </div>
        <div>
          <label>COURSE</label>
          <select {...register("course")}>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="B.TECH">B.TECH</option>
          </select>
        </div>
        <div>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};
