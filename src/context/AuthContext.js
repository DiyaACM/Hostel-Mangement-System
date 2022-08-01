import React, { createContext, useState, useEffect } from "react";
import { auth } from '../firebase/firebase'
import firebase from 'firebase/compat/app'

export const AuthContext = createContext()

function AuthContextProvider(props) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('hostelUser'))
    const [pending, setPending] = useState(true) 
    const [profilePic, setProfilePic] = useState('')

    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setCurrentUser(user)
                setPending(false)
            } else {
                setCurrentUser(null)
            }
        })
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }


    const handleUser = (user) => {
        setCurrentUser(user)
        localStorage.setItem('hostelUser', user)
    }
    const handleProfilePic = (img) => {
        setProfilePic(img)
    }

    useEffect(() => {
        authListener()
    }, [])


    const handleLogout = () => {
        auth.signOut();
        localStorage.removeItem('hostelUser')
    }

    const value = { currentUser, pending, handleLogout, handleUser, handleProfilePic, profilePic }



    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;