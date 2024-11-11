import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FireBase.init";


export const AuthContext=createContext(null);

const AuthProviders = ({children}) => {
    const provider= new GoogleAuthProvider();
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const createUser= (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser= (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignin = () =>{
        return signInWithPopup(auth,provider)
    }
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log("Current User",currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log("Still logged in",currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log("Logged Out")
    //         setUser(null)
    //     }
    // })
    const name="jami";
    // const age=22
    const authInfo={
        name,
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        googleSignin
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;