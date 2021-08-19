import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import AuthLoginService from './AuthLoginService';
import { useDispatch } from 'react-redux';


export default function AuthFormLogin(props) {

    const [isModalOpen, setIsModalOpen] = useState(true);

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
        console.log('onFormSubmitted', loginData);
        AuthLoginService(loginData)
            .then(response => {
                console.log('Login ok',response);
                
                sessionStorage.setItem('user-profile', JSON.stringify(response.userData));
                sessionStorage.setItem('access-token', response.accessToken);


                dispatch({type:"AUTH_LOGIN", payload:{username:response.first_name}});
                props.onClose();
            })
            .catch(error => {
                console.log('Error on Login',error);
            })
    }

    return (
        <div role="tabpanel" id="tab-form-login" hidden={!isModalOpen}>
            <DialogContent>

                <ValidatorForm className="login-form" onSubmit={onFormSubmitted} >

                    <TextValidator
                        name="email"
                        id="auth-form-login-email"
                        label="Email Address"
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
                        label="Password"
                        type="password"
                        value={password}
                    ></TextValidator>




                    <br />


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