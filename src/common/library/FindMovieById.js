import { useSelector } from 'react-redux';

/**
 * Search both in released and upcoming movies list
 * 
 * @param {*} id 
 * @returns 
 */
export default function FindMovieById(id) {

    const upcomingMovies = useSelector(state => state.upcomingMovies);
    const releasedMovies = useSelector(state => state.releasedMovies);

    let response =  upcomingMovies.filter((item) => {
        return item.id == id;
    });

    if (!response) {
        response =  releasedMovies.filter((item) => {
            return item.id == id;
        }); 
    }

    if (!response) {
        response = [{}]
    }


    return response[0];
}