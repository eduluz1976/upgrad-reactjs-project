import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';
import MovieCard from '../../common/movie-card/MovieCard';
import './GridMovies.css'

import { useSelector } from 'react-redux';

export default function GridMovies() {


    const list = useSelector(state => state.releasedMovies);

    return (
        
        <GridList
        cellHeight={350}
        cols={4} >

        {list.map((item) => {
            return (

                <MovieCard key={item.id}
                title={"Movie "+item.title}  
                subTitle={"Released Date "+item.releasedDate}
                imgSrc={item.img}

                 />
            );
        })}


        </GridList>

    );

}