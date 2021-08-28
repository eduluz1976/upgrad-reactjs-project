import React, { Fragment } from 'react';
import FindMovieById from '../../common/library/FindMovieById';
import Header from '../../common/header/Header.js';
import './Details.css'
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import LoadMoviesService from '../../common/services/LoadMoviesService';
export default function Details (props) {


    const movieId = props.match.params.id;    

    let movie = JSON.parse(sessionStorage.getItem('currentMovie'));
    if (!movie) {
        LoadMoviesService({ baseUrl: 'http://localhost:3000/api/v1/'});
        movie = FindMovieById(movieId);
        
    }

    if (movie == undefined) {
        return (
            <div>
             Movie {movieId} not found
            </div>
        );
    } else {
        return (

            <Fragment>            
                <Header/>          

                <div className="details-container">
            
                    <Left movie={movie}/>
                    <Middle movie={movie}/>
                    <Right movie={movie}/>

                </div>
        
            </Fragment>
    
        );
    }

    
}

