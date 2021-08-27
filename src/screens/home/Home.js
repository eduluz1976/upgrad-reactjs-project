import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../common/header/Header.js';
import FilterMovies from '../filter-movies/FilterMovies.js';
import GridMovies from '../grid-movies/GridMovies.js';
import UpcomingMovies from '../upcoming-movies/UpcomingMovies.js';
import './Home.css';


export default function Home(props) {

    const list = useSelector(state => state.releasedMovies);
    const [moviesList, setMovieList] = useState(list);

    useEffect(() => {
        setMovieList(list);
    },[list]);


    const filterHandler = (filters) => {

        let newMoviesList = [...list];

        if (filters.movieName.length > 0) {
            newMoviesList = newMoviesList.filter( item => {
                return (item.title.toLowerCase().indexOf(filters.movieName.toLowerCase()) >= 0);
            } );    
        }

        /**
         * if this movie has at least one of the selectedGenres, then toKeep=true
         */
        if (filters.selectedGenres.length > 0) {
            newMoviesList = newMoviesList.filter( currentMovie => {
                let toKeep = false;                    
                filters.selectedGenres.forEach(currentGenre => {
                    let found = currentMovie.genres.find(
                        movieGenre => {
                            return movieGenre === currentGenre.genre;
                        }
                    );
                    
                    if (currentGenre.genre === found) {
                        toKeep = true;
                    }    
                });                

                return toKeep;
            } );    
        }

        /**
         * Filtering by artists
         */
        if (filters.selectedArtists.length > 0) {
            newMoviesList = newMoviesList.filter( currentMovie => {
                let toKeep = false;                    
                filters.selectedArtists.forEach(currentArtist => {
                    let found = currentMovie.artists.find(
                        currentMovieArtist => {
                            let match = currentMovieArtist.id === currentArtist.id;

                            return match;
                        }
                    );                    
                    if (found && (currentArtist.id === found.id)) {
                        toKeep = true;
                    }    
                });                

                return toKeep;
            } );    
        }

        /**
         * Filtering by release date
         */
        if (filters.releaseDateStart.length > 0) {
            newMoviesList = newMoviesList.filter( currentMovie => {
                return currentMovie.release_date >= filters.releaseDateStart;
            });
        }

        if (filters.releaseDateEnd.length > 0) {
            newMoviesList = newMoviesList.filter( currentMovie => {
                return currentMovie.release_date <= filters.releaseDateEnd;
            });
        }


        setMovieList(newMoviesList);
    }


    return (
        <Fragment>
        <Header></Header>
        <UpcomingMovies/>

        <div className="home-movies-main-container">
            <div className="home-grid-movies-container">
                <GridMovies list={moviesList} />
            </div>
            <div className="home-filter-movies-container">
                <FilterMovies baseUrl={props.baseUrl} onFilter={filterHandler} />
            </div>
        </div>

        </Fragment>
    );
}