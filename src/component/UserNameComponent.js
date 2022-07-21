import React from "react";
import { UserAuth } from '../context/AuthContext';

export default function UserNameComponent() {
    const { user } = UserAuth();
    return <h4>{user ? user.displayName : 'User'}</h4>;
}