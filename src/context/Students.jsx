import React, { useState } from 'react'
import { AppContext } from './context'
import { StudentList } from './StudentList'

export const Students = () => {

    const [students, setstudents] = useState([
        {
            id: 1,
            name: 'John',
            age: 20,
        },{
            id: 2,
            name: 'Jay',
            age: 21,
        },{
            id: 3,
            name: 'parth',
            age:23
        }
    ])
    const studentDispatcher = (action,payload)=>{

        switch(action){
            case "DELETE_STUDENT":
                alert("DELETE_STUDENT")
                console.log(payload)
            break;
            case "ADD_STUDENT":
                alert("ADD_STUDENT")
                console.log(payload)
            break;
            default:
                alert("DEFAULT")
            return;
                                    
        }

    }


  return (
    <div>
            {/* props */}
            {/* <StudentList students={students} /> */}

            <AppContext.Provider value={{students,studentDispatcher}}>
                <StudentList />
            </AppContext.Provider>
    </div>
  )
}
