import {  ImageList } from '@material-ui/core';
import React from 'react';
import './UpcomingMovies.css';
import { useSelector } from 'react-redux';
import MovieCard from '../../common/movie-card/MovieCard';

export default function UpcomingMovies() {

    const list = useSelector(state => state.upcomingMovies);


    return (
        <div>
            <div className="upcoming-movies-heading">
                Upoming Movies
            </div>

            <div className="upcoming-movies-container">


            <ImageList
            rowHeight={250}
            
            
            
            cols={6}

            className="upcoming-movies-list"
            
            
            >
            

            {list.map((item) => {

                return (

                    <MovieCard key={item.id}
                    title={"Movie "+item.title}  
                    imgSrc={item.poster_url}
                    rowHeight={250}
                    movieData={item}
                    width={'17%'}
                     />

    
                );
            })}


            </ImageList>



             </div> 


            


        </div>
    );
}