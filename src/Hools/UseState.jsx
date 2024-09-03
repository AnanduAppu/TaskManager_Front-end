import React, { useContext, useState } from 'react'
import userContext from '../contex/UserContex';

function UseState() {
  const {setValue} = useContext(userContext)
// useState hook is a function which used to add state in functional components

//*important is what is state ?
    // state is nothing but just a value or variables of your components

const array = useState(0);

const count = array[0]
const func = array[1]


const [input,setInput]=useState('')


//useState hook when it is Object type

const [object,setObject]=useState({counter:0,name:""})

const objectfun = (e)=>{
e.preventDefault()
//setObject({counter:object.counter+1}) // accoreding this formeula we get out put {counter: 1} but we wont get complete object which includes name 
//console.log(object) // out put  {counter: 1} 
//* to solve this issue we use previous state which help to remeber the sate what it had in previous moment

0
setValue(object.counter)
console.log(object)




}
  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
            <input type="text" className='border border-gray-500' onChange={(e)=>setInput(e.target.value)}/>
            <h1  className='text-5xl p-5 border border-gray-400 '>{input}</h1>
       <p className='text-5xl p-5 border border-gray-400'>{count}</p> 
      
        <button className='text-5xl p-5 border border-gray-400' onClick={()=>func(count+1)}>+</button>
        <button className='text-5xl p-5 border border-gray-400' onClick={()=>func(count-1)}>-</button>

        <hr className='my-2'/>
        <p className='text-5xl p-5 border border-gray-400'>object counter:- {object.counter}</p> 
        <button className='text-5xl p-5 border border-gray-400' onClick={e=> objectfun(e)}>+</button>
        <button className='text-5xl p-5 border border-gray-400' onClick={()=>func(count-1)}>-</button>
        </div>
    </div>
  )
}

export default UseState