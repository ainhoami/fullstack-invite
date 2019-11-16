import React from 'react'
import { useInvite } from '../hooks'

export default props =>{
    const { notgoing } = useInvite()
    return(
        <div className="container">
           {notgoing.map(p=>(
                <div key = {'notgo' + p.id} class="person">
                    <p><img src={p.picture}/> </p>
                    <p>Name: {p.fname} {p.lname} </p>
                    <p>Phone: {p.phone}</p>
                    <p>Email: {p.email}</p>
                </div>
            ))}

        </div>
    )
}