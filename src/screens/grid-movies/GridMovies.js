import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';
import './GridMovies.css'

export default function GridMovies() {


    const list = [
        {
            n:1
        },
        {
            n:2
        },
        {
            n:3
        },
        {
            n:4
        },
        {
            n:5
        },
        {
            n:6
        },
        {
            n:7
        },
        {
            n:8
        }
    ]; 
    return (

            
        
        <GridList
        cellHeight={350}
        
        
        
        cols={4}

        
        
        
        >
        

        {list.map((item) => {

            return (
                <GridListTile >
                <img src={'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'} alt={'test'} />
                <GridListTileBar
                    title={"Movie "+item.n}
                >
                {"Movie "+item.n}
                </GridListTileBar>
    

            </GridListTile>

            );
        })}


        </GridList>





    );

}