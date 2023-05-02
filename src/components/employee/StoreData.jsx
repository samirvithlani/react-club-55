import React from 'react'

export const StoreData = () => {
    const storeData = ()=>{

        localStorage.setItem("id","101")
    }
  return (
    <div>
        <button onClick={storeData}>Store Data</button>
    </div>
  )
}
