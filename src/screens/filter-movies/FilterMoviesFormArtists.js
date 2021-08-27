import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState, Fragment } from 'react';



export default function FilterMoviesFormArtists (props) {

    const artistsList = props.artistsList;
    const setArtistsList=props.setArtistsList; 
    const selectedArtists = '';

    const toggleCheckboxValue = (index) => {
        const newArtistsList = artistsList.map((v, i) => {
            let isSelected = false;
            if (!v.isSelected) {
                if (i===index) {
                    isSelected = true;
                } else {
                    isSelected = false;
                }
            } else {
                if (i===index) {
                    isSelected = !v.isSelected;
                } else {
                    isSelected = v.isSelected;
                }
            }
            
            return {...v, isSelected:isSelected};
        });

        setArtistsList(newArtistsList);
    }

    return (
        <FormControl style={{width:'100%'}}>                
        <InputLabel>Artists
        </InputLabel>
            <Select value={selectedArtists} >
            { artistsList.map( (item, index) => {
                return (
                <MenuItem key={index} value={item.id}  selected={item.isSelected}>
                    <Checkbox key={index} checked={item.isSelected}
                    onClick={() => toggleCheckboxValue(index)}>
                        
                    </Checkbox> <span> {item.first_name} {item.last_name} </span>
                </MenuItem>
                );
            }  )}
        
            </Select>
                </FormControl>
    );

}