import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext=createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    // signup user 
    const createUser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const loginUser=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signOut
    const logOut=()=>{
        setLoader(true)
        return signOut(auth);
    }
    // observer
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,(loggedUser)=>{
        console.log("loggedUser",loggedUser);
        setUser(loggedUser)
        setLoader(false)
        })
        return ()=>{unSubscribe()}
        },[])
    const authInfo={user,loader,createUser,loginUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider