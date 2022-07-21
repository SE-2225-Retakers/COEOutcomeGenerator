import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import { signInWithGoogle } from '../firebase-config';

export default class LoginPage extends React.Component {
    render() {
        return (
        <div className="row justify-content-center">
            <div className="col-11 col-md-7 col-lg-4 mx-0 mb-6">
                <h1 className="text-center mt-5">Canvas</h1>
                <h2 className="text-center mt-3">Log In</h2>
            </div>
            <div className="text-center">
                <button className="btn btn-primary text-right mt-4" onClick={signInWithGoogle}>
                    Log In With Google
                </button>
            </div>
        </div>
        )
    };
};

