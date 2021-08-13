import React from 'react';
import './Header.css';
import MyImageSvg from '../../assets/logo.svg';
import AuthStatusBar from '../../common/auth-status-bar/AuthStatusBar';

export default function Header() {
    return (
        <div class="header-home">
            <img stroke="white" fill="white" src={MyImageSvg} className="header-logo"/>        

            <AuthStatusBar/>
        </div>
    );
}