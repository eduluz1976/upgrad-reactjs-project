import { Link, Typography } from '@material-ui/core';
import React from 'react';


export default function Left(props) {

    const movie = props.movie;

    return (
        <div className="details-left-part">
        <Typography className="back">
            <Link href="/">
                &#60; Back to Home
            </Link>
        </Typography>
                        

                    <img src={movie.poster_url} alt={movie.title} />

                </div>
    );
}