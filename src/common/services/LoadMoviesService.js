import { useSelector, useDispatch } from 'react-redux';


export default function LoadMoviesService(props) {

    // const releasedMovies = useSelector(state => state.releasedMovies);
    const dispatch = useDispatch();
    

    fetch(props.baseUrl + "/movies?limit=1000", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      })
        .then((response) => response.json())
        .then((response) => {
            dispatch({type:"LOAD_MOVIES", payload: response.movies});
        });  

    

    // fetch(props.baseUrl + "/artists?limit=1000", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Cache-Control": "no-cache"
    //     }
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       console.log(response.artists);
    //         dispatch({type:"LOAD_ARTISTS", payload: response.artists});
    //     });  

    
  
}