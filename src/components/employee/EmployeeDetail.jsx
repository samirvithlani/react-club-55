import React from 'react'
import { useParams } from 'react-router-dom'

export const EmployeeDetail = () => {
    var id = useParams().id
  return (
    <div>EmployeeDetail
        {
            id
        }
    </div>
  )
}
