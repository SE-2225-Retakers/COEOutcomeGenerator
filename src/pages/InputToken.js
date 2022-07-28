import React, { useEffect } from 'react';
import { UserAuth } from "../context/AuthContext";
import './login.css'
import logo from '../images/CanvasLogin.jpg'
import { useNavigate } from 'react-router-dom';


export default function InputTokenForm() {
    const { user, canvasToken } = UserAuth();
    const nav = useNavigate();

    useEffect(() => {
        if (!user) {
            nav('/')
            console.log('Not Logged In!')
        }
        if (canvasToken) {
            nav('/home');
            console.log('User has Canvas Token!')
        }
    });

    return (
        <div className="backgroundImage">
            <div className='main mx-auto'>
                <img src={logo} className="logo" alt='...' />
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="accessToken">Enter Access Token: </label>
                        <input type="text" name="accessToken"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
