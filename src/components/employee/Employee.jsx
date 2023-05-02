import React from 'react'
import { Link } from 'react-router-dom'

export const Employee = () => {
    var employees = [
        {
            id: 101,
            name: "Raj",
            email:"raj@gmail.com"
        },
        {
            id: 102,
            name: "parth",
            email:"parth@gmail.com"
        },
        {
            id: 103,
            name: "jay",
            email:"jay@gmail.com"
        },
    ]
  return (
    <div>
        Employee
        <Link to="employeedetail/101">Employee Detail</Link>
        <Link to="/employee/employeedetail/101">Employee Detail</Link>

        <ul>
            {
                employees.map((emp)=>{
                    return(
                        <li>
                            <Link to = {`/employee/employeedetail/${emp.id}`}>{emp.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
