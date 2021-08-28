import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './AuthFormDialog.css';
import AuthFormLogin from './AuthFormLogin.js';
import AuthFormRegister from './AuthFormRegister.js';


export default function AuthFormDialog(props) {


    const [state, setIsLoginOpen] = React.useState({ isLoginOpen: true, index: 0 });

    const onChangePanel = (e) => {
        let newState = state;
        if (state.isLoginOpen) {
            newState = { isLoginOpen: false, index: 1 };
        } else {
            newState = { isLoginOpen: true, index: 0 };
        }
        const finalState = { ...state, ...newState };
        setIsLoginOpen(finalState);
    }

    return (
        <div>
            <Dialog open={props.isAuthFormDialogOpen.isOpen} onClose={props.handleCloseAuthFormDialog} aria-labelledby="form-dialog-title">
                <Tabs value={state.index} onChange={onChangePanel}
                    indicatorColor="secondary"                    
                    variant="fullWidth"
                    aria-label="full width tabs example" >

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
