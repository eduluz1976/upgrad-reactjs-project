import React, { Fragment } from 'react';
import Header from '../../common/header/Header.js';
import UpcomingMovies from '../upcoming-movies/UpcomingMovies.js';
import './Home.css';


export default function Home() {
    return (
        <Fragment>
        <Header></Header>
        <UpcomingMovies/>

        </Fragment>
    );
}