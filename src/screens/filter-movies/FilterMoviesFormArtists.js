import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormArtists () {


    return (
        <FormControl style={{width:'100%'}}>                
        <InputLabel>Artists
        </InputLabel>
        <Select value={0}>
            <MenuItem>
                <Checkbox></Checkbox> 1
            </MenuItem>
            <MenuItem>
                <Checkbox></Checkbox> 2
            </MenuItem>
            <MenuItem>
                <Checkbox></Checkbox> 3
            </MenuItem>
        </Select>

                </FormControl>
    );

}