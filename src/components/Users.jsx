import React, { useState } from 'react'
import { UserList } from './UserList'

export const Users = () => {
    var title = "LIST OF USERS"
    var [userList, setusers] = useState([
        {
          id: 1,
          name: "Raj",
          email: "raj@gmail.com"
        },
        {
          id: 2,
          name: "Jay",
          email: "jay@gmail.com"
        },
        {
          id: 3,
          name: "Amit",
          email: "amit@gmail.com"
        }
      ])

   

    const test = (data)=>{
        
        console.log(data)
    }
    const deleteUser = (id)=>{
        
        userList = userList.filter((user)=>user.id !== id)
        console.log(userList)
        setusers(userList)
    }
  return (
    <div>
        <h2>USERS Component</h2>
        <UserList users = {userList} title = {title} test = {test} delete ={deleteUser}/>
    </div>
  )
}
