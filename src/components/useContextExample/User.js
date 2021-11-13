import React, {useContext} from 'react';

import { AppContext } from './ContextExample';

//commenting out normal props based data communication
// export default function User({username}) {
//     return (
//         <div>
//             <h3>User: {username}</h3>
//         </div>
//     )
// }


// will be using context api to share data
const User = ()=>{
    const {username} = useContext(AppContext);
    
    return (
        <div>
            <h3>User: {username}</h3>
        </div>
    )
}
export default User;