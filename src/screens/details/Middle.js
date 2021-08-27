import { Link, Typography } from '@material-ui/core';
import React from 'react';
import MovieCard from '../../common/movie-card/MovieCard';
import YouTube from 'react-youtube';

export default function Middle(props) {

    const movie = props.movie;

    function getTrailerId() {
        const trailerUrl = movie.trailer_url;
        return trailerUrl.substr(trailerUrl.indexOf('?v=')+3);
    }

    return (
        <div className="details-middle-part">
                    
        
        <h2>{movie.title}</h2> 

        <Typography color="textPrimary" gutterBottom className="sub-title">
            Genre:
        </Typography>
        
         {movie.genres.join(', ')} <br/>

         <Typography className="sub-title">Duration:</Typography>
         {movie.duration} <br/>

        <Typography className="sub-title">Release Date:</Typography>
         {movie.release_date} <br/>

        <Typography className="sub-title">Rating:</Typography>
         {movie.rating.toPrecision(2)} <br/> 
        &nbsp;<br/>

        <Typography className="sub-title">Plot:</Typography>
         <Link href={movie.wiki_url}>(Wiki Link)</Link> {movie.storyline} <br/> 
        &nbsp; <br/>

        <Typography className="sub-title">
        Trailer: <br/>
        </Typography>
        


        <YouTube videoId={getTrailerId()} style={{marginTop:16}} />
  
        



        </div>
    );
}