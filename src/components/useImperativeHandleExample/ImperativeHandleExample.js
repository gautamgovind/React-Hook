import React, {useRef} from 'react';
import Button from './Button';

export default function ImperativeHandleExample() {

    const buttonRef = useRef();
    return (
        <div>
            <h2>Hook | useImperativeHandle Example</h2>
            <br/>
            <button onClick={()=>{buttonRef.current.alterToggle();}}>Parent Button</button>
            <br/>
            <Button ref={buttonRef} />
        </div>
    )
}
