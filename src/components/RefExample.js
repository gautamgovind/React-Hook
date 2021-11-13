import React, {useState, useRef} from 'react'

export default function RefExample() {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [done, setDone] = useState(false);

    const inputRef = useRef();

    //Add todo list
    const handleAdd = ()=>{
        const newtodo = [...todo];
        newtodo.push(inputRef.current.value);
        setTodo(newtodo);
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    //remove todo item
    const clearTodo = (task)=>{
        const latestTodoList = todo.filter(item=>item!==task);
        setTodo(latestTodoList);
    }

    // Add and remove strick on task updatation 
    const taskComplete = (task)=>{
        console.log(task);
    }

    return (        
        <div>
            <h2>Hook | useRef Example:</h2>
            <p>{text}</p>
            <input type="text" onChange={(e)=>{setText(e.target.value)}} ref={inputRef} />
            <button onClick={handleAdd}>Add Todo</button>
            <ul style={{background:'#dedede', width:'250px', border:'1px solid #ccc', margin: '10px auto', padding:0, textTransform: 'capitalize'}}>
                {todo.map((item,index)=>(
                    <li key={item+index} style={{display:'flex', justifyContent: 'space-between', padding: '10px', border:'1px dotted #000'}}>
                        <span style={{fontWeight:600, cursor:'pointer'}}
                            onClick={()=>{taskComplete(item);}}>{done===true ? 'completed': index+1}
                        </span>
                        <span>{item}</span>
                        <span onClick={()=>clearTodo(item)}
                            style={{fontWeight:600, cursor:'pointer'}}>X
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
