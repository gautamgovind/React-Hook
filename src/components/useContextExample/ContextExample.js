import React, {useState, createContext} from 'react';
import User from './User';
import Login from './Login';


export const AppContext = createContext(null);

export default function ContextExample() {
    const [username, setUsername] = useState("");
    // here we are able to pass username and setUsername as a props because its only 2 componenets and state
    // Imagine if we have many components and state to share data with then it will be tidious. Hence we use UseContext 
    return (
        <div>
            <h2>Hook | useContext Example: </h2>
            {/* 
            commenting normal data sharing through props
            <User username={username} />
            <Login setUsername={setUsername} /> 
            */}
            <AppContext.Provider value={{username, setUsername}}>
                <User />
                <Login />
            </AppContext.Provider>
            
        </div>
    )
}
