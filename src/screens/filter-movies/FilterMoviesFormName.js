import {  FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormName (props) {

    const setMovieName=props.setMovieName

    return (        
        <FormControl className='filter-movies-item' >
        <InputLabel>Movie Name
        </InputLabel>
        <Input onChange={setMovieName} ></Input>          
    </FormControl>
    );

}