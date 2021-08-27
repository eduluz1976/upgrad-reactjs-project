import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormReleaseDate (props) {

    const setReleaseDate = props.setReleaseDate;

    return (        
        <FormControl style={{width:'100%'}}>                      
        
        <TextField
        label={props.label}
        type="date"
        InputLabelProps={{
            shrink: true,
          }}

          onChange={setReleaseDate}

        />
    </FormControl>
    );

}