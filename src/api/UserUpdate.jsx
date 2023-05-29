import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const UserUpdate = () => {
    var id = useParams().id;
    var navigate = useNavigate();
    
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:async()=>{
            const res = await axios.get("https://node5.onrender.com/user/user/"+id);
            return({
                name:res.data.data.name,
                email:res.data.data.email,
                age:res.data.data.age,
                isActive:res.data.data.isActive
            })
        }
    });
    const submit = async(data) =>{

        var user = {
            name:data.name,
            email:data.email,
            age:data.age,
            isActive:data.isActive =="true"?true:false
        }
        console.log(user);

        const res = await axios.put("https://node5.onrender.com/user/user/"+id,user);
        console.log(res.data);
        navigate("/apidemo3");

    }
  return (
    <div>
        user update
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name",{required:true})}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email",{required:true})}/>
        </div>
        <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register("age",{required:true})}/>
        </div>
        <div>
            <label htmlFor="status">STATUS</label>
            <br></br>
            TRUE<input type="radio" value="true" name ="isActive" id="status" {...register("isActive",{required:true})}/>
            FALSE<input type="radio" value="false" name ="isActive" id="status" {...register("isActive",{required:true})}/>

        </div>
        <div>
            <input type="submit" value="submit"/>
        </div>
        </form>
    </div>
  )
}
