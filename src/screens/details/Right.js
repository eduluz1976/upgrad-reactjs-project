import React from 'react';
import Artists from './Artists';
import RateMovie from './RateMovie';


export default function Right(props) {
    const movie = props.movie;
    return (
        <div className="details-right-part">
        
                    <RateMovie movie={movie} />
                    <br/>
                    
                        <Artists movie={movie} />
                    
        </div>
    );
}