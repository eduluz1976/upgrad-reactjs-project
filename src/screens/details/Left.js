import React from 'react';


export default function Left(props) {

    const movie = props.movie;

    return (
        <div className="details-left-part">
                    

                    <img src={movie.poster_url} alt={movie.title} />

                </div>
    );
}