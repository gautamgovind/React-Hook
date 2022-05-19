import React, { useEffect } from 'react';

const ChildComponent = (props) => {
    console.log("re-render this component", props.fruits);

    useEffect(()=>{
        props.fetchData('users')
    },[props.fetchData]);

  return (
    <div>
        {/* By default every time parent component re-render, child component re-render too. 
            regardless of props
        */}
        <h3>{props.title}</h3>
        <p>Child Compoents</p>
    </div>
  )
}

export default React.memo(ChildComponent)
{/* React.Memo works fine if you are passing premitive type i.e number, string as a props
    but it breaks and starting re-rendering child components if you pass props such as array or object 

    Every time parent component re-render array/object/function remade and React.memo is not smart enough to distingish that. 

    To fix this problem, we have to use 'useMemo' this won't create new array on each re-render
*/}