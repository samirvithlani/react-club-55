import React, { useContext } from 'react'
import { AppContext } from './context'

export const DevDetails = () => {
    const {dev} = useContext(AppContext)
    console.log(dev)
  return (
    <div>DevDetails</div>
  )
}
