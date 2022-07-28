import React from "react";
import { Row } from "react-bootstrap";
import { UserAuth } from '../context/AuthContext';
import profileIcon from "../images/ProfileIcon.png"

export default function UserPicture() {
    const { user } = UserAuth();

    return (
        <Row className="justify-content-center">
            <img alt={profileIcon} src={user.photoURL} style={{ maxWidth: '150px' }}></img>
        </Row>
    );
}
