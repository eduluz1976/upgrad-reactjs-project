import { Checkbox, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';



export default function FilterMoviesFormGenres (props) {

    const genresList = props.genresList;
    const setGenresList=props.setGenresList; 
    const selectedGenres = '';

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
        <FormControl className='filter-movies-item'>
        <InputLabel>Movie Genres
        </InputLabel>
        <Select value={selectedGenres} >
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