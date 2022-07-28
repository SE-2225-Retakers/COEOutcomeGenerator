
import React, {useState} from "react";

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
import { Container, Row, Modal, Button} from "react-bootstrap";
import { UserProvider } from "../context/AuthContext";
import UserNameComponent from "../component/UserNameComponent"
import LogOut from "../component/LogOutComponent";
import IPOForm from "../component/IPOForm";


const Sidebar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <MenuItem icon={<FiBookOpen />} onClick={handleShow}>Individual PO Forms</MenuItem>

                            <Modal show={show} onHide={handleClose} centered size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>INDIVIDUAL PO FORMS</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <IPOForm/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" style={{maxWidth: 200}} onClick={handleClose} >
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>

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
