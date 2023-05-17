import React, { useState } from 'react'

export const DynamicComponent = () => {
    const [data, setdata] = useState([
        {
            fieldName: "name",
            fieldType: "text",
            placeholder: "Enter your name",
        },{
            fieldName: "email",
            fieldType: "email",
            placeholder: "Enter your email",
        },{
            fieldName: "password",
            fieldType: "password",
            placeholder: "Enter your password",
        },{
            fieldName:"Male",
            fieldType:"radio",
            value:"Male",
            name:"gender"
        },
        {
            fieldName:"FeMale",
            fieldType:"radio",
            value:"FeMale",
            name:"gender"
        }
    ])
  return (
    <div>
            <form>
                {
                    data.map((d)=>{
                        return(
                            <div>
                                <label>{d.fieldName}</label>
                                <input type={d.fieldType} placeholder={d.placeholder} value={d?.value}/>
                            </div>
                        )
                    })
                }
            </form>
    </div>
  )
}
