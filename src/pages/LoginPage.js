import React from 'react';
import { Link } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';

function LoginForm() {
    return (
        <div className="card-body">
        {/* <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='acc_email' />
            <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='acc_password' />
            <label for="floatingPassword">Password</label>
        </div > */}
        <div className="text-center">
            <button className="btn btn-primary text-right mt-4" >
                Log In With Google
            </button>
        </div>
        <p className="text-center mt-4">
            <Link to="/signup" class="active">Create</Link>
        </p>
    </div>
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

