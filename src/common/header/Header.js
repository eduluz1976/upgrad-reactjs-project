import React from 'react';
import './Header.css';
import MyImageSvg from '../../assets/logo.svg';
import AuthStatusBar from '../auth-status-bar/AuthStatusBar';
import AuthFormDialog from '../../common/auth-form/AuthFormDialog';

export default function Header() {

    const [isAuthFormDialogOpen, setIsAuthFormDialogOpen] = React.useState({isOpen: false});

    
    const onClickLoginButton = () => {
        console.log('Opening the Input dialog');
        setIsAuthFormDialogOpen({isOpen: true});
    }
      
    const handleClose = () => {
        setIsAuthFormDialogOpen({isOpen: false});
    };


    return (
        <div className="header-home">
            <img stroke="white" fill="white" src={MyImageSvg} className="header-logo"/>        

            <AuthStatusBar clickLoginButtonHandler={onClickLoginButton} />

            <AuthFormDialog isAuthFormDialogOpen={isAuthFormDialogOpen} handleCloseAuthFormDialog={handleClose} />
        </div>
    );
}