import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext=createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    // signup user 
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signOut
    const logOut=()=>{
        return signOut(auth);
    }
    // observer
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,(loggedUser)=>{
        console.log("loggedUser",loggedUser);
        setUser(loggedUser)})
        return ()=>{unSubscribe()}
        },[])
    const authInfo={user,createUser,loginUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider