import React from "react";
import { Row } from "react-bootstrap";
import { UserAuth } from '../context/AuthContext';

export default function UserNameComponent() {
    const { user } = UserAuth();
    return (
        <Row className="justify-content-center">
            <h4>{user ? user.displayName : 'User'}</h4>
        </Row>
    );
}
