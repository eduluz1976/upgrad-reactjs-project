import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Typography } from '@material-ui/core';

export default function AuthFormRegister(props) {

    const [message, setMessage] = React.useState("  ");

    const [registerData, setRegisterData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactNumber: ''
    });


    const { firstName, lastName, email, password, contactNumber } = registerData;

    const inputChangedHandler = (e) => {
        const newState = registerData;
        newState[e.target.name] = e.target.value;
        setRegisterData({ ...registerData, ...newState });
    }


    const onFormSubmitted = (e) => {
        e.preventDefault();
        console.log('onFormSubmitted', registerData);
        setMessage("Registration Successful. Please Login!");
    }


    return (
        <div role="tabpanel" id="tab-form-register" hidden={props.isLoginOpen}>
            <DialogContent>
                <ValidatorForm className="login-form" onSubmit={onFormSubmitted} >
                    <TextValidator
                        autoFocus
                        name="firstName"
                        margin="dense"
                        id="auth-form-register-first-name"
                        label="First Name"
                        type="text"
                        value={firstName}
                        validators={['required']}
                        errorMessages="First name is required"
                        onChange={inputChangedHandler}

                    /> <br />
                    <TextValidator
                        autoFocus
                        name="lastName"
                        margin="dense"
                        id="auth-form-register-last-name"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        validators={['required']}
                        errorMessages="Last name is required"
                        onChange={inputChangedHandler}

                    /> <br />

                    <TextValidator
                        autoFocus
                        name="email"
                        value={email}
                        margin="dense"
                        id="auth-form-register-email"
                        label="Email Address"
                        type="email"
                        validators={['required']}
                        errorMessages="Email is required"
                        onChange={inputChangedHandler}
                    /><br />
                    <TextValidator
                        autoFocus
                        name="password"
                        value={password}
                        margin="dense"
                        id="auth-form-register-password"
                        label="Password"
                        type="password"
                        validators={['required']}
                        errorMessages="Password is required"
                        onChange={inputChangedHandler}
                    /><br />
                    <TextValidator
                        autoFocus
                        name="contactNumber"
                        value={contactNumber}
                        margin="dense"
                        id="auth-form-register-contact-number"
                        label="Contact Number"
                        type="text"
                        validators={['required']}
                        errorMessages="Contact number is required"
                        onChange={inputChangedHandler}
                    /><br />

                    <Typography style={{minHeight:'30px'}}>{message}</Typography>

                    <Button type="submit" 
                        variant="contained"
                        color="primary">
                        Register
                    </Button>
                </ValidatorForm>
            </DialogContent>


        </div>
    );
}