import { GridList, ImageList, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import ArtistCard from '../../common/artist-card/ArtistCard';


export default function Artists(props) {

    const movie = props.movie;

    return (
        <Fragment>
        <Typography>
            <b>Artists:</b>
        </Typography>        
        <ImageList cols={2} rowHeight={180}>
        {movie.artists.map( item => {
            return (
                <ArtistCard artist={item} key={item.id}/>
            );
        } )}
        
        </ImageList>
        </Fragment>
        
    );
}