import React, { useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap'
import Sidebar from './SideBar'
import logo from "../images/CanvasIcon.png"
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


export function HomePage() {
    const { user } = UserAuth();
    const nav = useNavigate();

    useEffect(() => {
        if (user) {
            nav('/');
            console.log('Not Logged In!');
        }
    });

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img alt='...' src={logo} style={{maxWidth: '50px', paddingRight: '5px'}}/>
                        CANVAS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Sidebar />
        </div>
    )
}