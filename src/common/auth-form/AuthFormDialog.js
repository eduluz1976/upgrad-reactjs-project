import React from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import './AuthFormDialog.css';
import AuthFormLogin from '../auth-form-login/AuthFormLogin';
import AuthFormRegister from '../auth-form-register/AuthFormRegister';


export default function AuthFormDialog(props) {


    const [state, setIsLoginOpen] = React.useState({ isLoginOpen: true, index: 0 });



    const onChangePanel = (e) => {

        let newState = state;
        if (state.isLoginOpen) {
            newState = { isLoginOpen: false, index: 1 };
        } else {
            newState = { isLoginOpen: true, index: 0 };
        }

        setIsLoginOpen({ ...state, ...newState });
    }

    return (
        <div>
            <Dialog open={props.isAuthFormDialogOpen.isOpen} onClose={props.handleCloseAuthFormDialog} aria-labelledby="form-dialog-title">
                <Tabs value={state.index} onChange={onChangePanel}

                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"

                >
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <div>
                    <AuthFormLogin onClose={props.handleCloseAuthFormDialog} isLoginOpen={state.isLoginOpen} />
                    <AuthFormRegister onClose={props.handleCloseAuthFormDialog} isLoginOpen={state.isLoginOpen} />
                </div>

            </Dialog>
        </div>
    );
}
