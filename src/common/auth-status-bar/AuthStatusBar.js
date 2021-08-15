import React from 'react';
import { useSelector, useStore, useDispatch } from 'react-redux';
import './AuthStatusBar.css';

export default function AuthStatusBar (props) {


    const loggedUser = useSelector(state => state.loggedUser);
    const appStore = useStore();
    const dispatch = useDispatch();

    const stylesButtons = {
        login: { display: 'none' },
        logout: {display: 'none' }
    }

    if (loggedUser == undefined) {
        stylesButtons.login.display = 'block';
    } else {
        stylesButtons.logout.display = 'block';
    }


    function clickLoginButtonHandler(e) {
        dispatch({type:"AUTH_LOGIN", payload:{username:'Eduardo'}});
        // props.clickLoginButtonHandler
    }


    function clickLogoutButtonHandler(e) {
        dispatch({type:"AUTH_LOGOUT"});
    }

    return (
        <div className="auth-status-bar">

            

            <button name="Login" style={stylesButtons.login} onClick={clickLoginButtonHandler}>Login</button>
            <button name="Logout" style={stylesButtons.logout} onClick={clickLogoutButtonHandler}>Logout</button>

         

        </div>
    );
}