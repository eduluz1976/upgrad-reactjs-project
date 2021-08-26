import { GridListTile, GridListTileBar, ImageListItem, Link } from '@material-ui/core';
import React from 'react'
import './MovieCard.css';
import { useHistory, useRouteMatch } from 'react-router';

export default function MovieCard(props) {

    const history = useHistory();
    // const movieId = props.movieData;

    // if (props.movieData && props.movieData.id) {        
        const movieId = props.movieData.id;
        const movie = props.movieData;
    // } else {
    //     console.log('MovieCard', props.movieData);
    // }
    

    function getSubtitle(props) {
        if (props.subTitle) {
            return props.subTitle;
        }
        return "";
    }

    function getCustomStyle() {
        let response = {};
        if (props.cellHeight) {
            response.height = props.cellHeight;
        }
        if (props.width) {
            response.width = props.width ;
        }
        // console.log('getCustomStyle', props, response);
        return response;
    }


    function goToMovieDetails(e) {
        e.preventDefault();
        console.log('goToMovieDetails', movieId, JSON.stringify( props));
        sessionStorage.setItem('currentMovie',JSON.stringify(movie));
        // if (movieId !== undefined && movieId>0) {
            history.push('/movie/'+movieId);
        //     return;
        // } 
        
    }


    return (

        <GridListTile  className="movie-card-container"
        style={getCustomStyle()}
        >

        <img src={props.imgSrc} alt={props.title}  onClick={goToMovieDetails} />        

        <GridListTileBar
            title={props.title}
            subtitle={getSubtitle(props)}
        >
        {props.title}
        </GridListTileBar>


    </GridListTile>
    );
};