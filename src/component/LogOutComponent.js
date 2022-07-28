import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import {
    Menu,
    MenuItem,
} from "react-pro-sidebar";

import {
    FiLogOut,
} from "react-icons/fi";

export default function LogOut() {
    const { logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logOut();
        navigate('/');
    }

    return (
        <Menu iconShape="square" onClick={handleLogOut}>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
        </Menu>
    )
}