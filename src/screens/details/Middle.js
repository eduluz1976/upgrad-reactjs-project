import { Link, Typography } from '@material-ui/core';
import React from 'react';
import MovieCard from '../../common/movie-card/MovieCard';


export default function Middle(props) {

    const movie = props.movie;


    return (
        <div className="details-middle-part">
                    
        
        <h2>{movie.title}</h2> <br/>

        <Typography color="textPrimary" gutterBottom>
        <b>Genre:</b> {movie.genres.join(', ')} <br/>
        <b>Duration:</b> {movie.duration} <br/>
        <b>Release Date:</b> {movie.release_date} <br/>
        <b>Rating:</b> {movie.critics_rating} <br/> 
        &nbsp;<br/>

        <b>Plot:</b> <Link href={movie.wiki_url}>(Wiki Link)</Link> {movie.story_line} <br/> 
        &nbsp; <br/>

        <b>Trailer</b>: <br/>


        PUT THE MOVIE HERE...



        </Typography>


        </div>
    );
}