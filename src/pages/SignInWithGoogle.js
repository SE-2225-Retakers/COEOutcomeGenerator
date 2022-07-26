import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { UserAuth } from '../context/AuthContext';

export default function Signin() {
    const { user, loginWithGoogle } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/inputToken');
            console.log("Welcome: " + user.displayName);
        }
    }, [ user ]);

    return (
    <div className="row justify-content-center">
        <div className="col-11 col-md-7 col-lg-4 mx-0 mb-6">
            <h2 className="text-center mt-5">CPU COE</h2>
            <h1 className="text-center mt-1">Program Outcome Forms Generator</h1>
            <h2 className="text-center mt-3">Log In</h2>
        </div>
        <div className="text-center">
            <button className="btn btn-primary text-right mt-4" onClick={loginWithGoogle}>
                Log In With Google
            </button>
        </div>
    </div>
    )
};