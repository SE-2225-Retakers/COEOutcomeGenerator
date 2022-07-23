import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { auth } from '../firebase-config';
import logo from '../images/CanvasLogin.jpg'
import './login.css'

export default function Signin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home');
            console.log("Welcome: " + user.user.displayName);
        }
        if (error) {
            navigate('/');
            console.log(error.message);
        }
        if (loading) {
            console.log('loading...');
        }
    });

    return (
        <Container className="backgroundImage">
            <Container className='main'>
                <img src={logo} className="logo" alt='...' />
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="accessToken">Enter Access Token: </label>
                        <input type="text" name="accessToken"/>
                    </div>
                </form>
                <button className="primary" onClick={async () => await signInWithGoogle()}>Login with Google</button>
            </Container>
        </Container>
    )
};

