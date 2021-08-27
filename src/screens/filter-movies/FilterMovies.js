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


    const [movieName, setMovieName] = useState('');
    const [releaseDateStart, setReleaseDateStart] = useState('');
    const [releaseDateEnd, setReleaseDateEnd] = useState('');

    const [artistsList, setArtistsList] = useState([]);

    const [genresList, setGenresList] = useState([]);

    const onFilter = props.onFilter;

    useEffect(() => {


    fetch(props.baseUrl + "/artists?limit=1000", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.artists);
          setArtistsList(response.artists);
        });  

        fetch(props.baseUrl + "/genres?limit=100", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache"
            }
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response.genres);
              setGenresList(response.genres);
            });  
    }
    ,[]);


    
    const doFilterMovies = () => {

        
        const selectedArtists = artistsList.filter(item => item.isSelected);
        const selectedGenres = genresList.filter(item => item.isSelected);

        onFilter({
            movieName: movieName,
            selectedArtists: selectedArtists,
            selectedGenres: selectedGenres,
            releaseDateStart: releaseDateStart,
            releaseDateEnd: releaseDateEnd
        });
    }

    function movieNameHandler(e) {
        setMovieName(e.target.value);
    }

    function releaseDateStartHandler(e) {
        setReleaseDateStart(e.target.value);
    }
    function releaseDateEndHandler(e) {
        setReleaseDateEnd(e.target.value);
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



                <FilterMoviesFormName setMovieName={movieNameHandler} />

                <br/>

               <FilterMoviesFormGenres genresList={genresList} setGenresList={setGenresList}  />

               <br/>

               <FilterMoviesFormArtists artistsList={artistsList} setArtistsList={setArtistsList} />

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date Start"  setReleaseDate={releaseDateStartHandler} />

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date End" setReleaseDate={releaseDateEndHandler} />

               <br/>

                <Button
                contained="true"
                onClick={doFilterMovies}
                style={{backgroundColor:'#0f0ff0', width:'100%',color:'#fff'}}
                >APPLY</Button>


            </Card>
       
        
    );
}