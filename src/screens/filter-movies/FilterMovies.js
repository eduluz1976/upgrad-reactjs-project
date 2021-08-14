import React from 'react';
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
// import theme from './FilterTheme';



export default function FilterMovies() {


    
// const theme =  makeStyles({});
// createTheme({
//     palette: {
//       primary: light,
//     },
//   });


// const themeInstance = {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   };

//  <ThemeProvider  theme={themeInstance}>
//  </ThemeProvider>


// const theme = createMuiTheme({
 
// })

    return (


       
        
        
            <Card className="filter-movies-card-container"
            >
                <CardContent                
                >
                    <Typography color="textPrimary" gutterBottom>
                    FIND MOVIES BY:
                    </Typography>
                </CardContent>



                <FilterMoviesFormName/>

                <br/>

               <FilterMoviesFormGenres/>

               <br/>

               <FilterMoviesFormArtists/>

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date Start"/>

               <br/>

               <FilterMoviesFormReleaseDate label="Release Date End"/>

               <br/>

                <Button
                contained="true"
                style={{backgroundColor:'#0f0ff0', width:'100%',color:'#fff'}}
                >APPLY</Button>


            </Card>
       
        
    );
}