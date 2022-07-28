
import React from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import {
    FiHome,
    FiLogOut,
    FiBookOpen,
    FiBook
} from "react-icons/fi";




import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css"
import { Container, Row } from "react-bootstrap";
import { UserProvider } from "../context/AuthContext";
import UserNameComponent from "../component/UserNameComponent"
import LogOut from "../component/LogOutComponent";
import UserPicture from "../component/UserPictureComponent";


const Sidebar = () => {
    return (
        <div id="sidebar">
            <ProSidebar>
                <SidebarContent>
                    <Menu iconShape="square">
                        <Container>
                            <UserPicture />
                            <UserNameComponent />
                        </Container>
                        <MenuItem icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <MenuItem icon={<FiBookOpen />}>Individual PO Forms</MenuItem>
                        <MenuItem icon={<FiBook />}>Class PO Forms</MenuItem>

                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <LogOut />
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
