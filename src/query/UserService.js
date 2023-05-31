import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const getUserData = ()=>{

    return axios.get("http://localhost:3001/user/user")

}

const addUserData =(user) =>{
    console.log("user",user)
    return axios.post("https://node5.onrender.com/user/user",user)
}

export const useGetUserData = () =>{

    var navigate = useNavigate()
        return useQuery('getuser',getUserData,{
            // onSuccess:(data)=>{
            //     console.log("data.........",data)
            // }
            
            retry:10,
            retryDelay:100,
            enabled:false,
            refetchOnMount:false,
        })
}

export const useAddUserData = () =>{

    var navigate = useNavigate()
    return useMutation('addUser',addUserData,{
    
        onSuccess:(data)=>{
            console.log("data.........",data)
            if(data){
                navigate("/apidemo1")
            }
        },
        onError:(error)=>{
            console.log("error.........",error)
        }
    })

}