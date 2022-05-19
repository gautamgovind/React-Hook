import React, { useState, useMemo, useEffect, useCallback } from 'react'
import ChildComponent from './ChildComponent'


const fruitsNoDependencies = ['apple', 'orange', 'mangoes'] 
// if there are no change required i.e. in case of no dependencies put the array/object out of function and it won't cause 
// re-render of child components. Hence you do not need any hooks like useMemo or useCallback

const Comparehooks = () => {

    const [count, setCount] = useState(0);
    //const fruits = ['apple', 'orange', 'mangoes']; 
    // on each re-render new array get created and that leads to re-render child components
    const fruits = useMemo(()=>{
        return ['apple', 'orange', 'mangoes']
    },[]);

    // fetchData will re-create everytime this component render/re-render and that will cause re-render of child components as well
    // to fix this, we need to use 'useCallback 

    // const fetchData = (type)=>{
    //     const url = `https://jsonplaceholder.typicode.com/${type}`;
    //     return fetch(url)
    //         .then(res=>res.json())
    //         .then(data=>{console.log("api response",data)});

    // }

    const fetchData = useCallback(async (type)=>{
        const url = `https://jsonplaceholder.typicode.com/${type}`;
        const res = await fetch(url);
        try{
            const data = await res.json();
            console.log("callback api response", data);
        }catch(error){
            console.log(error)
        }
    },[]);

    useEffect(()=>{
        fetchData('todos');
    },[]);

  return (
    <div>
        <h2>Compare React-Memo, useMemo and useCallBack</h2>
        <p>{count}</p>
        <div><button onClick={()=>setCount(count+1)}>Click Here!!</button></div>
        <ChildComponent title="Child component title" 
            fruits={fruits} 
            fruitsNoDependencies={fruitsNoDependencies} 
            fetchData={fetchData}    
        />
    </div>
  )
}

export default Comparehooks