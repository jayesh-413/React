import React, { useState } from 'react'

export default function () {
    const [data,setData] = useState(0);

    const inc = () =>{
        setData(data+1);
    }
    const dec = () =>{
        setData(data-1);
    }
    const mul = () =>{
        setData(data*5);
    }
  return (
    <div>
        <p>Value :- {data}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={mul}>Multipication</button>

    </div>
  )
}
