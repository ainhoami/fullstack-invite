import React from 'react'
import { useInvite } from '../hooks'

export default props =>{
    const { going } = useInvite()
    return(
        <div className="container">
            {going.map(p=>(
                <div key = {'go' + p.id} class="person">
                    <p><img src={p.picture}/> </p>
                    <p>Name: {p.fname} {p.lname} </p>
                    <p>Phone: {p.phone}</p>
                    <p>Email: {p.email}</p>
                </div>
            ))}

        </div>
    )
}