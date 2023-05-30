import React, { useEffect } from 'react'
import { useGetUserData } from '../query/UserService'

export const UserServiceComp = () => {

    //refetch
    const {data,isLoading,isError,refetch} = useGetUserData()
    useEffect(() => {
      
        console.log("data",data)
        console.log("isLoading",isLoading)
        console.log("isError",isError)
      
    }, [isLoading])
    
    


  return (
    <div>
            <ul>
                {
                    isLoading && <h1>Loading...</h1>
                }
                {
                    data?.data?.data?.map((d)=>{
                        return(<li>
                            {d.name}
                        </li>)
                    })
                }
            </ul>
            <button onClick={()=>{refetch()}}>Refetch</button>
    </div>
  )
}
