import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import { auth } from '../firebase-config.js';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './login.css'
import logo from '../images/CanvasLogin.jpg'


function LoginForm() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container>
            <button className="primary" onClick={signInWithGoogle}>Login</button>
        </Container>
    )

}

export default function LoginPage() {
    return (
        <Container className='backgroundImage'>
            <Container className='main'>
                <img src={logo} className="logo" alt='...'/>
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="email">Enter access token</label>
                        <input type="email" name="email" placeholder="Enter token" />
                    </div>
                    <LoginForm />
                </form>
            </Container>
        </Container>

    );
};

