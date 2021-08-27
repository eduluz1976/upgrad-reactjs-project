import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// import {StarBorderIcon} from  '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Typography } from '@material-ui/core';
import './Details.css'

export default function RateMovie(props) {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const movie = props.movie;

    return (
        <div>
        <Typography className='sub-title'>
          Rate this movie 
        </Typography>        
        <br/>

        <Rating
        name="hover-feedback"
        defaultValue={movie.critics_rating}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log('set new rating', newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}

        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        
      />
      
        </div>
    );
}