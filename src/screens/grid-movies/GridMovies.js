import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';
import MovieCard from '../../common/movie-card/MovieCard';
import './GridMovies.css'

export default function GridMovies() {


    const list = [
        {
            n:1,
            releasedDate:'abc'
        },
        {
            n:2,
            releasedDate:'xyz'
        },
        {
            n:3,
            releasedDate:'abc'
        },
        {
            n:4,
            releasedDate:'abc'
        },
        {
            n:5,
            releasedDate:'abc'
        },
        {
            n:6,
            releasedDate:'abc'
        },
        {
            n:7,
            releasedDate:'abc'
        },
        {
            n:8,
            releasedDate:'abc'
        }
    ]; 
    return (
        
        <GridList
        cellHeight={350}
        cols={4} >

        {list.map((item) => {
            return (

                <MovieCard key={item.n}
                title={"Movie "+item.n}  
                subTitle={item.releasedDate}
                imgSrc={'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'}
                
                 />
            );
        })}


        </GridList>

    );

}