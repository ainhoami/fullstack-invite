import React from 'react'
import { useInvite } from '../hooks'
import I from "../lib/Icon"
export default props =>{
    const { person, go, nogo, going, notgoing, loading } = useInvite()
    return(
        <div>
            {loading 
            ?   <p>Loading...</p>
            :   
            <>
                <div className="count">
                <p>Going: {going.length}</p>
                <p>Not Going: {notgoing.length}</p>
                </div>
                <div className="person"> 
                    <div className="imgcontainer">
                        <img src={person.picture}/>
                    </div>
                    <div className="personInfo">
                        <p><span className="bold">Name: </span>{person.fname} {person.lname} </p>
                        <p><span className="bold">Phone:</span> {person.phone}</p>
                        <p><span className="bold">Email:</span> {person.email}</p>
                    </div>
                    <div className="yesnobutton">
                    <button onClick={e => nogo(person)}><I icon="times"></I></button>
                    <button onClick={e => go(person)}><I icon="check"></I></button>
                    </div>

                </div>
            
             </>   
        }
        </div>
    )
}