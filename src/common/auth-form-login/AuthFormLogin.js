import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';


export default function AuthFormLogin(props) {

    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    });

    const { email, password } = loginData;

    const inputChangedHandler = (e) => {
        const newState = loginData;
        newState[e.target.name] = e.target.value;
        setLoginData({ ...loginData, ...newState });
    }


    const onFormSubmitted = (e) => {
        e.preventDefault();
        console.log('onFormSubmitted', loginData);
    }

    return (
        <div role="tabpanel" id="tab-form-register" hidden={!props.isLoginOpen}>
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


                    <button color="primary" type="submit">
                        Login
                </button>

                </ValidatorForm>
            </DialogContent>




        </div>
    );
}