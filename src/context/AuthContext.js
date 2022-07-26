import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [ user ] = useAuthState(auth);
    const [ signInWithGoogle ] = useSignInWithGoogle(auth)
    const canvasToken = undefined;

    const logOut = async () => {
        await signOut(auth);
    }

    const loginWithGoogle = async () => {
        await signInWithGoogle()
    }

    return (
        <UserContext.Provider value={{user, logOut, canvasToken, loginWithGoogle }}>
          { children }
        </UserContext.Provider>
    )
}

export function UserAuth() {
    return useContext(UserContext)
};