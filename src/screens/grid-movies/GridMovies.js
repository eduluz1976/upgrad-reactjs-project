import {  GridList, GridListTile, GridListTileBar, ImageList } from '@material-ui/core';
import React from 'react';
import MovieCard from '../../common/movie-card/MovieCard';
import './GridMovies.css'

import { useSelector } from 'react-redux';

export default function GridMovies() {


    const list = useSelector(state => state.releasedMovies);

    return (
        
        <ImageList
        rowHeight={350}
        cols={4}
         >

        {list.map((item) => {
            return (

                <MovieCard key={item.id}
                title={"Movie "+item.title}  
                subTitle={"Released Date "+item.release_date}
                imgSrc={item.poster_url}
                movieData={item}
                width='25%'               

                 />
            );
        })}


        </ImageList>

    );

}