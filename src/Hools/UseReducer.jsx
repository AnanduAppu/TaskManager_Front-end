import React from 'react'
import { useReducer } from 'react'

const initailvalue = {count:0}

const reducer = (state,action)=>{
switch (action.type) {
    case "incerease":
        return {count:state.count+1}
  
    case "decerease":
            return{count: state.count-1}
      
    default:
        return { count: state.count };
}
}

function UseReducer() {

    //the useReducer hook is used for multuple state management


    const [state,dispatch] = useReducer(reducer,initailvalue)


    const increment= (e)=>{
        e.preventDefault()
        dispatch({type:"incerease"})
    }

    const decrement= (e)=>{
        e.preventDefault()
        dispatch({type:"decerease"})
    }

  return (
    <div  className='flex justify-center items-center h-screen' >
             <p className='text-5xl p-5 border border-gray-400'>{state.count}</p> 
      
      <button className='text-5xl p-5 border border-gray-400' onClick={(e)=>increment(e)} >+</button>
      <button className='text-5xl p-5 border border-gray-400' onClick={(e)=>decrement(e)}>-</button>
    </div>
  )
}

export default UseReducer