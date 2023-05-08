import React, { useContext } from 'react'
import { AppContext } from './context'
import { StudentDetail } from './StudentDetail'

export const StudentList = () => {
  const {students,studentDispatcher} = useContext(AppContext)
  //console.log(students)
  return (
    <div>
      <h1>Student List
        <button onClick={()=>{studentDispatcher("DELETE_STUDENT",{id:1})}}>DELETE</button>
      </h1>
      <StudentDetail/>
    </div>
  )
}
