import React from "react";
import { useForm } from "react-hook-form";

export const ProductRegistation = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();

  console.log(errors);
  const submit = (data)=>{

    console.log(data);
  }
  const validationSchema = {
    pname:{
        required:{
            value:true,
            message:"Product Name is required"
        }
    },
    pprice:{
        required:{
            value:true,
            message:"Product Price is required"
        },
        min:{
            value:10,
            message:"Product Price should be greater than 100"
        }
    }
  }

  return (
    <div>
      <h1>PRODUCT REGISTRATON FORM</h1>
      <form onSubmit={handleSubmit(submit)}>
        {/* <div>
          <label>Product Name</label>
          <input type="text" name="productName" placeholder="Product Name" {...register("pname",{required:{
            value:true,
            message:"Product Name is required"
          }})} />
          {
            errors.pname && <p>{errors.pname.message}</p>
          }
        </div> */}
        <div>
          <label>Product Name</label>
          <input type="text" name="productName" placeholder="Product Name" {...register("pname",validationSchema.pname)} />
          {
            errors.pname && <p>{errors.pname.message}</p>
          }
        </div>
        <div>
          <label>Product Price</label>
          <input type="number" name="productPrice" placeholder="Product Price" {...register("pprice",validationSchema.pprice)} />
          {
            errors.pprice && <p>{errors.pprice.message}</p>
          }
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
