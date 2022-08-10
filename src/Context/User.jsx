import React from 'react';

export const User = React.createContext();

export const UserProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = React.useState({});
    React.useEffect(()=>{
        let loggedUserLS = JSON.parse(localStorage.getItem('loggedUserBooking')) || {};
        setLoggedUser(loggedUserLS);
    },[])
    return (
        <User.Provider value={{ loggedUser, setLoggedUser }}>
        {children}
        </User.Provider>
    );
}