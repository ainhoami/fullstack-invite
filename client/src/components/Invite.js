import React from 'react'
import { useInvite } from '../hooks'

export default props =>{
    const { person, go, nogo, loading } = useInvite()
    return(
        <div>
            {loading 
            ?   <p>Loading...</p>
            :   
            <div className="person"> 
                    <p><img src={person.picture}/> </p>
                    <p>Name: {person.fname} {person.lname} </p>
                    <p>Phone: {person.phone}</p>
                    <p>Email: {person.email}</p>
                    <button onClick={e => go(person)}>Going</button>
                    <button onClick={e => nogo(person)}>Not Going</button>
               </div>
}
        </div>
    )
}