import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [ user ] = useAuthState(auth);
    const canvasToken = undefined;

    const logOut = async () => {
        await signOut(auth);
    }

    return (
        <UserContext.Provider value={{user, logOut, canvasToken}}>
          { children }
        </UserContext.Provider>
    )
}

export function UserAuth() {
    return useContext(UserContext)
};