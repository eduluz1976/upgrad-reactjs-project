import React from 'react';
import './AuthStatusBar.css';

export default function AuthStatusBar (props) {
    return (
        <div className="auth-status-bar">

            <button name="Login" onClick={props.clickLoginButtonHandler}>Login</button>
            <button name="Logout">Logout</button>

         

        </div>
    );
}