import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const GET_PERSON = "invite/GET_PERSON"
const SET_GOING = "invite/SET_GOING"
const SET_NOTGOING = "invite/SET_NOTGOING"
const LOADING = "invite/LOADING"

const initialState ={
    person: {},
    going: [],
    notgoing: [],
    loading: false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case GET_PERSON:
            return {...state, person: action.payload}
        case SET_GOING:
            return {...state, going:[...state.going, action.payload]}
        case SET_NOTGOING:
            return {...state, notgoing:[...state.notgoing, action.payload]}
        case LOADING:
            return {...state, loading:action.payload}
        default:
            return state
    }
}

function getPerson(){
    return dispatch =>{
        dispatch({
            type: LOADING,
            payload:true
        })
        axios.get('/invite/person').then(resp =>{
            dispatch({
                type: GET_PERSON,
                payload:resp.data
            })
            dispatch({
                type: LOADING,
                payload:false
            })
        })
    }

}
//
function setgoing(user){
 return dispatch => {
     axios.post('invite/going', {user}).then(resp =>{
         dispatch({
             type:SET_GOING,
             payload:resp.data
         })
         dispatch(getPerson()) //
     })
 }   

}

function setNotGoing(user){

    return dispatch => {
        axios.post('invite/notgoing', {user}).then(resp =>{
            dispatch({
                type:SET_NOTGOING,
                payload:resp.data
            })
            dispatch(getPerson())
        })
    }   

}

export const useInvite = function(){ // custom hook
    const dispatch=useDispatch()
    const person = useSelector (appState => appState.inviteState.person)
    const going = useSelector (appState => appState.inviteState.going)
    const notgoing = useSelector (appState => appState.inviteState.notgoing)
    const loading = useSelector(appState => appState.inviteState.loading)

    const getP = ()=> dispatch(getPerson())
    const go = user => dispatch(setgoing(user))
    const nogo = user => dispatch(setNotGoing(user))
    

    useEffect(()=>{ //
        getP()
    },[])

    return { person, going, notgoing, getP, go, nogo, loading}

}