import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase/firebase.Config";
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const UnsubsCribe = onAuthStateChanged(auth, currentUseer =>{
            setUser(currentUseer)
            // console.log(currentUseer)
            setLoading(false)
        })
        return ()=>{
            return UnsubsCribe()
        }
    },[])



  
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;