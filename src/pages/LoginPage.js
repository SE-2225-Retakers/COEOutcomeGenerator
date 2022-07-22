import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

export default function Signin() {
    const [ signInWithGoogle, user, loading, error ] = useSignInWithGoogle(auth);
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
    <div className="row justify-content-center">
        <div className="col-11 col-md-7 col-lg-4 mx-0 mb-6">
            <h2 className="text-center mt-5">CPU COE</h2>
            <h1 className="text-center mt-1">Program Outcome Forms Generator</h1>
            <h2 className="text-center mt-3">Log In</h2>
        </div>
        <div className="text-center">
            <button className="btn btn-primary text-right mt-4" onClick={async () => await signInWithGoogle()}>
                Log In With Google
            </button>
        </div>
    </div>
    )
};

