import React from "react";
import { useUser } from '../context/AuthContext';


export default function UserNameComponent() {
    const value = useUser();
    return <h4>{value.displayName}</h4>;
}