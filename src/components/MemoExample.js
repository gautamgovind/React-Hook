import React, {useState, useEffect, useMemo, memo} from 'react';
import axios from 'axios';

export default function MemoExample() {
    const [data, setData] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{
                setData(response.data);
            })
    },[]);

    // This function will create and everything will compute on each state change, if not using useMemo
    const findLongestName = (comments)=>{
        if(!comments) return null;

        let longestName="";
        for(let i=0; i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }

        console.log("This is the longest name in comment", longestName);
        
        return longestName;
    }

    // useMemo will be used only in case of large data computation, this is not usually practice 
    // create memoized function 

    const getLongestName = useMemo(()=>{ findLongestName(data) }, [data]);

    return (
        <div>
            <h2>Hook | useMemo Example:</h2>
            <div>{getLongestName}</div>
            
            <button onClick={()=>{setToggle(!toggle)}} >TOggle </button>
            <p>{toggle && "Toggle Text"}</p>
        </div>
    )
}
