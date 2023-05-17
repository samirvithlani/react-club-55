import React, { useContext } from 'react'
import { AppContext } from './context'
import { DevDetails } from './DevDetails'

export const DeveloperList = () => {
    const {dev} = useContext(AppContext)
   // console.log(dev)
  return (
    <div>
        <DevDetails/>
    </div>
  )
}
