import {  ImageListItemBar, ImageListItem, Link } from '@material-ui/core';
import React from 'react'
import './MovieCard.css';
import { useHistory, useRouteMatch } from 'react-router';

export default function MovieCard(props) {

    const history = useHistory();

    const movieId = props.movieData.id;
    const movie = props.movieData;
    

    function getSubtitle(props) {
        if (props.subTitle) {
            return props.subTitle;
        }
        return "";
    }

    function getCustomStyle() {
        let response = {};
        if (props.rowHeight) {
            response.height = props.rowHeight;
        }
        if (props.width) {
            response.width = props.width ;
        }
        return response;
    }


    function goToMovieDetails(e) {
        e.preventDefault();
        sessionStorage.setItem('currentMovie',JSON.stringify(movie));

        history.push('/movie/'+movieId);
        
    }


    return (

        <ImageListItem  className="movie-card-container"
        style={getCustomStyle()}
        >

        <img src={props.imgSrc} alt={props.title}  onClick={goToMovieDetails} />        

        <ImageListItemBar
            title={props.title}
            subtitle={getSubtitle(props)}
        >
        {props.title}
        </ImageListItemBar>


    </ImageListItem>
    );
};