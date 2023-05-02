import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
    const [data, setdata] = useState({
        name: "Raj",
        email: "raj@gmail.com"
    })
  return (
    <div>AboutUs
        <Link to ="/contactus" state={{data}}>CONTACT US</Link>

    </div>
  )
}
