import { Grid, GridList, GridListTile, GridListTileBar, ImageListItemBar } from '@material-ui/core';
import React from 'react';
import './UpcomingMovies.css';


export default function UpcomingMovies() {

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
        <div>
            <div className="upcoming-movies-heading">
                Upoming Movies
            </div>

            <div className="upcoming-movies-container">


            <GridList
            cellHeight={250}
            
            
            
            cols={6}

            className="upcoming-movies-list"
            
            
            >
            

            {list.map((item) => {

                return (
                    <GridListTile className="upcoming-movies-item" key={item.n}>
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



             </div> 


            


        </div>
    );
}