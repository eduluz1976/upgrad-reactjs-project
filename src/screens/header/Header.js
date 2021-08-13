import React from 'react';
import './Header.css';
import MyImageSvg from '../../assets/logo.svg';

export default function Header() {
    return (
        <div class="header-home">
            <img stroke="white" fill="white" src={MyImageSvg} className="header-logo"/>        
        </div>
    );
}