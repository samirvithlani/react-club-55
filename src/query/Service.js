import axios from "axios"
import { useQuery } from "react-query"

const getUserData = ()=>{
    return axios.get("http://localhost:3001/user/user")
}

export const useGetUserData = ()=>{

        return useQuery('getuser',getUserData,{
            // enabled:false,
            // refetchOnMount:false
            retry:10,
            retryDelay:100,
            onSuccess:(data)=>{
                console.log("data.........",data)
            },
            meta:{
                title:"User Data"
            }
        })

}