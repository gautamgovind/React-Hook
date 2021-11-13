import React, {useCallback, useState} from 'react';
import Child from './Child';

const CallBackExample = ()=> {

    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Here useCallback hook example goes!!!");

    const returnComment = useCallback((name)=>{
        return `${data} Developer -  ${name}`;
    }, [data]);

    return (
        <div>
            <h2>Hooks | useCallBack Example</h2>
            <Child returnComment={returnComment} />

            <p>{toggle && "THis text will toggle"}</p>
            <button onClick={()=>{setToggle(!toggle)}}>Toggle Button</button>            
        </div>
    )
}

export default CallBackExample;
