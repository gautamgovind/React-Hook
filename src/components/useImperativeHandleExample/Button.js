import React, { useState, useImperativeHandle, forwardRef } from 'react'

const Button = forwardRef((props, ref)=> { //(props, ref) - maintain the order, props will come first and then ref
    const [toggle, setToggle] = useState(false);
    
    useImperativeHandle(ref, ()=>({
        alterToggle(){
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button>Child Button</button>
            {toggle && <p>this text is for toggling..</p>}
        </div>
    )
})

export default Button;