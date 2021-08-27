import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormName (props) {

    const setMovieName=props.setMovieName

    return (        
        <FormControl style={{width:'100%'}}>                
        <InputLabel>Movie Name
        </InputLabel>
        <Input onChange={setMovieName} ></Input>          
    </FormControl>
    );

}