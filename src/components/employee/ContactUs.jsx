import React from 'react'
import { useLocation } from 'react-router-dom'

export const ContactUs = () => {

        var location = useLocation()
        console.log(location)
  return (
    <div>ContactUs
        {
            location?.state?.data?.name
        }
    </div>
  )
}
