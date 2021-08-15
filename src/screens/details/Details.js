import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import FindMovieById from '../../common/library/FindMovieById';
import Header from '../../common/header/Header.js';
import { Link } from '@material-ui/core';
import './Details.css'
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
export default function Details (props) {

    console.log(props);

    const movieId = props.match.params.id;

    // const movie = useSelector(state => state.upcomingMovies);

    const movie = FindMovieById(movieId);

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

            <Link> &lt;= Back to Home </Link>

            <div className="details-container">

                <Left movie={movie}/>
                <Middle movie={movie}/>
                <Right movie={movie}/>
                
                

               


            </div>
    
    
    
            </Fragment>
    
        );
    }

    
}

