import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector, useStore, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import AuthLogoutService from '../auth-form/AuthLogoutService';
import IsUserLogged from '../library/IsUserLogged';
import './AuthStatusBar.css';

export default function AuthStatusBar (props) {
    
    const loggedUser = IsUserLogged(); //useSelector(state => state.loggedUser);
    const appStore = useStore();
    const dispatch = useDispatch();
    const history = useHistory();
    const route = useRouteMatch();

    const stylesButtons = getStylesButton();

    

    function getStylesButton() {
        const response = {
            login: { display: 'none' },
            logout: {display: 'none' },
            bookMovie: {display: 'none' },
        }

        if (loggedUser) {
            response.logout.display = 'block';
        } else {
            response.login.display = 'block';            
        }

        
        if (route.path.search('/movie')>=0) {
            response.bookMovie.display = 'block';
        }

        return response;
    }
    


    function clickLoginButtonHandler(e) {
        props.clickLoginButtonHandler();
    }


    function clickLogoutButtonHandler(e) {


        const accessToken = sessionStorage.getItem('access-token');

        AuthLogoutService({accessToken: accessToken})
        .then(response => {
            sessionStorage.setItem('user-profile', false);
            sessionStorage.setItem('access-token', false);
            dispatch({type:"AUTH_LOGOUT"});
        });
        
    }

    function clickBookShowButtonHandler() {
        console.log(route.params);
        let movieId = route.params.id;
        
        if (movieId !== undefined && movieId>0) {
            history.push('/book/'+movieId);
            return;
        } 

        alert('Invalid Movie Id');        
    }

    return (
        <div className="auth-status-bar">

            <Button name="Login" variant="contained" style={stylesButtons.login} onClick={clickLoginButtonHandler}>Login</Button>
            <Button name="Logout" variant="contained" style={stylesButtons.logout} onClick={clickLogoutButtonHandler}>Logout</Button>
            <Button variant="contained"
            color="primary"
            name="BookShow" style={stylesButtons.bookMovie} onClick={clickBookShowButtonHandler}>Book Show</Button>

        </div>
    );
}