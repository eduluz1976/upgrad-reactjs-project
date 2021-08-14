import { GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react'
import './MovieCard.css';

export default function MovieCard(props) {


    function getSubtitle(props) {
        if (props.subTitle) {
            return props.subTitle;
        }
        return "";
    }


    return (
        <GridListTile  className="movie-card-container">
        <img src={props.imgSrc} alt={props.title} />
        <GridListTileBar
            title={props.title}
            subtitle={getSubtitle(props)}
        >
        {props.title}
        </GridListTileBar>


    </GridListTile>
    );
};