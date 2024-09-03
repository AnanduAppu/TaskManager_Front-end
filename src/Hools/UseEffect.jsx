import React, { useEffect, useState } from 'react'

function UseEffect() {

//* What is useEffect?
    // It is used to control or perform side effects in a React component.

//* What is a side effect?
    // A side effect refers to any operation or action that affects something outside the scope of the function being executed.
    // In other words, a side effect is anything that interacts with the outside world.

    // Common side effects in React include: data fetching, DOM manipulation (directly updating the DOM), and using timers.

/* The syntax of useEffect takes two arguments: a callback function and a dependencies array.
   The callback function specifies 'what to run,' and the dependencies array determines 'when to run the callback.'

* In class components, the useEffect hook serves as an alternative to the lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount.

 useEffect(() => {
   // Your effect code here
 }, []); // The dependencies array is optional
 */

 const [counter1,setCounter1]=useState(0)
 const [counter2,setCounter2]=useState(0)

// useEffect without dependencies
useEffect(() => {
    document.title = `${counter1} new count`;
}); // This will execute on every render

// useEffect with an empty dependency array
useEffect(() => {
    document.title = `${counter1} new count`;
}, []); // This will execute only on the initial render

// useEffect with a dependency variable
useEffect(() => {
    document.title = `${counter1} new count`;
}, [counter2]); // This will only execute when the dependency variable changes; here, it runs when the counter2 variable changes


//useEffect clean up function

const [time,setTime] = useState(0)

useEffect(()=>{
    const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    
      // Cleanup function
      return () => {
        clearInterval(interval);
      };
}, [])


  return (
    <div className='flex justify-center items-center h-screen'>
               <p className='text-5xl p-5 border border-gray-400'>{counter1}</p> 
      
      <button className='text-5xl p-5 border border-gray-400' onClick={()=>setCounter1(counter1+1)}>+</button>
      <button className='text-5xl p-5 border border-gray-400' onClick={()=>setCounter1(counter1-1)}>-</button>

      <hr className='my-5'/>
      <p className='text-5xl p-5 border border-gray-400'>{counter2}</p> 
      
      <button className='text-5xl p-5 border border-gray-400' onClick={()=>setCounter2(counter2+1)}>+</button>
      <button className='text-5xl p-5 border border-gray-400' onClick={()=>setCounter2(counter2-1)}>-</button>

      <hr className='my-5' />
      <p className='text-5xl p-5 border border-gray-400'>{time}</p>
    </div>
  )
}

export default UseEffect