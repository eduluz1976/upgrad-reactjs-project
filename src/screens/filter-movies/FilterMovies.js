import React, { useEffect, useState } from 'react';
import './FilterMovies.css';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import FilterMoviesFormName from './FilterMoviesFormName';
import FilterMoviesFormGenres from './FilterMoviesFormGenres';
import FilterMoviesFormArtists from './FilterMoviesFormArtists';
import FilterMoviesFormReleaseDate from './FilterMoviesFormReleaseDate';
import { useSelector } from 'react-redux';
// import theme from './FilterTheme';



export default function FilterMovies(props) {


    const artists = useSelector(state => state.artists);
    const [artistsList, setArtistsList] = useState([]);

    const genres = useSelector(state => state.genres);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        setArtistsList(artists);
        setGenresList(genres);
    }
    ,[]);


    
    const doFilterMovies = () => {

        
        const selectedArtists = artistsList.filter(item => item.isSelected);
        const selectedGenres = genresList.filter(item => item.isSelected);



        console.log("doFilterMovies-selectedArtists",selectedArtists);
        console.log("doFilterMovies-selectedGenres",selectedGenres);
    }


    return (
        
            <Card className="filter-movies-card-container"
            >
                <CardContent                
                >
                    <Typography color="textPrimary" gutterBottom>
                    FIND MOVIES BY:
                    </Typography>
                </CardContent>



                <FilterMoviesFormName />

                <br/>

               <FilterMoviesFormGenres genresList={genresList} setGenresList={setGenresList}  />

               <br/>

               <FilterMoviesFormArtists artistsList={artistsList} setArtistsList={setArtistsList} />

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date Start"/>

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date End"/>

               <br/>

                <Button
                contained="true"
                onClick={doFilterMovies}
                style={{backgroundColor:'#0f0ff0', width:'100%',color:'#fff'}}
                >APPLY</Button>


            </Card>
       
        
    );
}