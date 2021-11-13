import React, {useEffect} from 'react';

const Child = ({returnComment})=> {

    useEffect(()=>{
        console.log("check how many called??");
    }, [returnComment])
    return (
        <div>
            <p>Child Component</p>
            <h4>{returnComment("Gautam")}</h4>
        </div>
    )
}

export default Child;