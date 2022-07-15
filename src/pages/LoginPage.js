import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import { auth } from '../firebase-config.js';
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
        <button onClick={signInWithGoogle}>
            log In With Google
        </button>
        </Container>
    )

}

export default function LoginPage() {
    return (
        <Container>
            <Form>
                <div className="row justify-content-center">
                    <div className="col-11 col-md-7 col-lg-4 mx-0 mb-6">
                        <h1 className="text-center mt-5">Canvas</h1>
                        <h2 className="text-center mt-3">Log In</h2>
                        <img src="" className="card-img-top img-fluid" />
                        <LoginForm/>
                    </div>
                </div>
            </Form>
        </Container>
    );
};

