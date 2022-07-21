
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

import profileIcon from "../images/ProfileIcon.png"


import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css"
import { Container, Row } from "react-bootstrap";
import { UserProvider } from "../context/AuthContext";
import UserNameComponent from "../component/UserNameComponent"
import LogOut from "../component/LogOutComponent";


const Sidebar = () => {
    return (
        <div id="sidebar">
            <ProSidebar>
                <SidebarContent>
                    <Menu iconShape="square">
                        <Container>
                            <Row className="justify-content-center">
                                <img alt="..." src={profileIcon} style={{ maxWidth: '150px' }}></img>
                            </Row>
                            <Row className="justify-content-center">
                                <UserNameComponent />
                            </Row>
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
