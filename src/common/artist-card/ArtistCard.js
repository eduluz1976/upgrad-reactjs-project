import { ImageListItem, ImageListItemBar } from '@material-ui/core';
import React from 'react';
import './ArtistCard.css';

export default function ArtistCard(props) {

    const artist = props.artist;
    const artistName = artist.first_name + " " + artist.last_name;
    return (
        <ImageListItem className="artist-card-container">
            <img src={artist.profile_url} alt={artistName}
                className="artist-card-img" />

            <ImageListItemBar title={artistName} >
                {artistName}
            </ImageListItemBar>
        </ImageListItem>
    );
}