import { GridList, ImageList, TextField, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import ArtistCard from '../../common/artist-card/ArtistCard';
import './Artists.css';

export default function Artists(props) {

    const movie = props.movie;

    if (!movie.artists) {
        return (
            <p>&nbsp;</p>
        );
    }

    return (
        <Fragment>
            <Typography className="sub-title">
             Artists:
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