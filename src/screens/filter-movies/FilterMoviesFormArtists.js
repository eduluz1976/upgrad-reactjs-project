import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState, Fragment } from 'react';



export default function FilterMoviesFormArtists (props) {

    const artistsList = props.artistsList;
    const setArtistsList=props.setArtistsList; 

    const toggleCheckboxValue = (index) => {
        const newArtistsList = artistsList.map((v, i) => {
            console.log(`v ${i} = `, v);
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

        console.log('newArtistsList', newArtistsList);

        setArtistsList(newArtistsList);
    }

    return (
        <FormControl style={{width:'100%'}}>                
        <InputLabel>Artists
        </InputLabel>
            <Select >
            { artistsList.map( (item, index) => {
                console.log('artistsList.map', index, item);
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