import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import AuthLoginService from './AuthLoginService';
import { useDispatch } from 'react-redux';
import './AuthFormDialog.css';

export default function AuthFormLogin(props) {

    const [hasError, setHasError] = useState({err: false, message:''});

    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const { email, password } = loginData;

    const inputChangedHandler = (e) => {
        const newState = loginData;
        newState[e.target.name] = e.target.value;
        setLoginData({ ...loginData, ...newState });
    }


    const onFormSubmitted = (e) => {
        e.preventDefault();

        AuthLoginService(loginData)
            .then(response => {
                
                sessionStorage.setItem('user-profile', JSON.stringify(response.userData));
                sessionStorage.setItem('access-token', response.accessToken);


                dispatch({type:"AUTH_LOGIN", payload:{username:response.first_name}});
                props.onClose();
            })
            .catch(error => {
                setHasError({...hasError,  err: true, message: error.message});
            })
    }

    const displayErrorMessage = () => {        
        if (hasError.err) {
            return <div>{hasError.message}</div>;
        }        
    };

    return (
        <div role="tabpanel" id="tab-form-login" hidden={!props.isLoginOpen}>
            <DialogContent>

                <ValidatorForm className="login-form" onSubmit={onFormSubmitted} >

                    <TextValidator
                        name="email"
                        id="auth-form-login-email"
                        label="Username *"
                        type="email"
                        value={email}
                        onChange={inputChangedHandler}
                        validators={['required']}
                        errorMessages="Email is required"                        
                    ></TextValidator>




                    <br />

                    <TextValidator

                        name="password"
                        onChange={inputChangedHandler}

                        validators={['required']}
                        errorMessages="Password is required"

                        id="auth-form-login-password"
                        label="Password *"
                        type="password"
                        value={password}
                    ></TextValidator>

                    <br />

                    {displayErrorMessage()}


                    <Button color="primary" 
                    type="submit"                    
                    variant="contained"
                    >
                        Login
                </Button>

                </ValidatorForm>
            </DialogContent>




        </div>
    );
}