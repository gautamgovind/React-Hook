import React, {useState, useReducer} from 'react';


const reducer = (state, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {...state, reducerCount: state.reducerCount+1, reducerShowText: !state.reducerShowText}
            case "TOGGLETEXT":
                return {...state, reducerCount: state.reducerCount, reducerShowText: state.reducerShowText}
            default:
                return state;
    }
}
export default function ReducerExample() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer, {
        reducerCount:0, reducerShowText: true
    })
    return (
        <div>
            <h1>Hooks Example: </h1><br/>
            <h2>Hook | useState and useReducer Example: </h2>
            <h3>{count}</h3>
            {/* currently we are taking two action on the same button and altering two states i.e. count and showtext 
                If you are working with multiple action, you should consider using hook 'useReducer' that will use single
                state declaration and manage both state
            */}
            <button onClick={()=>{setCount(count+1); setShowText(!showText)}}>
                Click Me(useState)!
            </button>
            <br/>
            {showText && "I will toggle here!!!!!"}
            <br/>
            
            {/* useReducer is mostly useful when you are dealing with multiple state  */}
            <h2>{state.reducerCount} </h2>
            <button onClick={()=>{dispatch({ type: "INCREMENT"}); dispatch({ type: "TOGGLETEXT"})}}>
                Click Me(useReducer)!
            </button>
            <br/>
            {state.reducerShowText && "I will toggle here!!!!!"}            
        </div>
    )
}
