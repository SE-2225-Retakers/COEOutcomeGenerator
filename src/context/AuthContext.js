import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

export const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {
    const [ user, loading, error] = useAuthState(auth);

    return (
        <UserContext.Provider value={ user }>
          { children }
        </UserContext.Provider>
    )
}