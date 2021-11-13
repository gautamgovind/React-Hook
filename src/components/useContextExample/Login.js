import React, {useContext} from 'react';

import { AppContext } from './ContextExample';

//commenting out normal props based data communication
// export default function Login({setUsername}) {
//     return (
//         <div>
//             <input type="text" onChange={(e)=>{
//                     setUsername(e.target.value);
//                 }} 
//             />
//         </div>
//     )
// }

// will use context api to share data 
const Login = ()=> {

    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}                
            />
        </div>
    )
}

export default Login;