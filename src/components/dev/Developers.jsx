import React, { useState } from 'react'
import { AppContext } from './context'
import { DeveloperList } from './DeveloperList'

export const Developers = () => {
const [dev, setdev] = useState([
    {
        id:1,
        name:"samir",
        age:23,
    },{
        id:2,
        name:"ram",
        age:24,
    }
])

  return (
    <div>
        <AppContext.Provider value={{dev}}>
            <DeveloperList/>
        </AppContext.Provider>
        
    </div>
  )
}
