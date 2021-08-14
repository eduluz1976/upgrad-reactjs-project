import React, { Fragment } from 'react';
import Header from '../../common/header/Header.js';
import FilterMovies from '../filter-movies/FilterMovies.js';
import GridMovies from '../grid-movies/GridMovies.js';
import UpcomingMovies from '../upcoming-movies/UpcomingMovies.js';
import './Home.css';


export default function Home() {
    return (
        <Fragment>
        <Header></Header>
        <UpcomingMovies/>

        <div className="home-movies-main-container">
            <div className="home-grid-movies-container">
                <GridMovies />
            </div>
            <div className="home-filter-movies-container">
                <FilterMovies/>
            </div>
        </div>

        </Fragment>
    );
}