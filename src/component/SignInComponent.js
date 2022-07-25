import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { Container } from 'react-bootstrap';


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
        <Container className='col-md-12 text-center mt-4' style={{width: 350}}>
            <button className="primary" onClick={async () => await signInWithGoogle()}>Login with Google</button>
        </Container>

    )
};

