import React, {useLayoutEffect, useEffect, useRef} from 'react'

export default function LayoutEffectExample() {

    const inputRef = useRef();

    // useEffect and useLayoutEffect hooks looks similar but they are differnt fundamentaly
    // useLayoutEffect calls earlier stage of page rendering, before useEffect being called in the page

    //most of the time, useEffect called after page renderig
    //in contrast, useLayoutEffect called before stuff printed to the page
    useLayoutEffect(()=>{
        console.log(inputRef.current.value); // load before useEffect changes value
    },[]);

    useEffect(() => {
        inputRef.current.value = "value changed";
    }, [])

    return (
        <div>
            <h2>Hook | useLayoutEffect Example:</h2>
            <input ref={inputRef} type="text" value="Test useLayoutEffect" 
                style={{width:'250px', height:'45px', border: '1px solid #ccc'}}
            />
        </div>
    )
}
