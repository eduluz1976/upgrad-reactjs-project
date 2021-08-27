import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormGenres (props) {

    const genresList = props.genresList;
    const setGenresList=props.setGenresList; 

    const toggleCheckboxValue = (index) => {
        const newGenresList = genresList.map((v, i) => {
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

        setGenresList(newGenresList);
    }

    return (
        <FormControl style={{width:'100%'}}>                
        <InputLabel>Movie Genres
        </InputLabel>
        <Select >
        { genresList.map( (item, index) => {
            return (
            <MenuItem key={index} value={item.id}  selected={item.isSelected}>
                <Checkbox key={index} checked={item.isSelected}
                onClick={() => toggleCheckboxValue(index)}>
                    
                </Checkbox> <span> {item.genre}  </span>
            </MenuItem>
            );
        }  )}
        </Select>

                </FormControl>
    );

}