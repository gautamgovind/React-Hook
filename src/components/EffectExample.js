import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EffectExample() {
    const [data, setData] = useState("");

    // useEffect will change on every state change or on every refresh
    //second parameter of the 'useEffect' will determine how many times this will be called
    // [] empty array means function/hook useEffect call only once.
    // if you want to call useEffect on every state change like [count]
    // useEffect primarly use for api call
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{
                setData(response.data[0]);
            })
    },[]);

    return (
        <div>
            <h2>Hook | UseEffect Example:</h2>
            <p>Hello {data.email}</p>
        </div>
    )
}
