import axios from "axios"
import { useQuery } from "react-query"

const getUserData = ()=>{

    return axios.get("http://localhost:3001/user/user")

}

export const useGetUserData = () =>{

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