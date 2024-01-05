import React from 'react'
import {useState} from 'react'

const Counter = () => {
    const [data,setData] = useState(0);

    const inc=()=>
    {
        setData(data+1);
    }
    const dec=()=>
    {
        setData(data-1);
    }

    return(
        <>
            <button onClick = {inc}>
                Increase
            </button>
            <p>{data}</p>
            <button onClick = {dec}>
                Decrease
            </button>
        </>
    )
}

export default Counter;