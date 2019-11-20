import React from 'react'
import { useInvite } from '../hooks'

export default props =>{
    const { notgoing } = useInvite()
    return(
        <div className="container">
            {notgoing.map(p=>(
                <div key = {'go' + p.id} class="people">
                    <div className="imgcontainer">
                        <img src={p.picture}/>
                    </div>
                 <div className="personInfo">

                    <p>Name: {p.fname} {p.lname} </p>
                    <p>Phone: {p.phone}</p>
                    <p>Email: {p.email}</p>
                </div>
                </div>
            ))}

        </div>
    )
}
