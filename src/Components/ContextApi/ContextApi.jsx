import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/firebase';

const Authcontext=createContext(null);

export {Authcontext}



const ContextApi = ({children}) => {
    

    const [register,setRegister]=useState(false)

    const [user,setUser]=useState(null)

    const AuthInfo={
        setRegister,
        register,
        user,
        setUser
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user)
                
                // ...
            }
            return () => {
                unsubscribe()
            }
        });
    }, [])

  

    return (
        <Authcontext.Provider value={AuthInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default ContextApi;