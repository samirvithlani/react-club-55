import React, { useContext } from 'react'
import { AppContext } from './context'

export const StudentDetail = () => {
    const {students} = useContext(AppContext)
    console.log(students)
  return (
    <div>
        <h1>DETAIL</h1>
    </div>
  )
}
