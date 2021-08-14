import { createStore } from "redux";

const initialState = {
    isAuthDialogOpen: false,
    releasedMovies: [
        {
            id: 1,
            title: 'Movie 1',
            releasedDate: '2020-01-01',
            img: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
        },
        {
            id: 2,
            title: 'Movie 2',
            releasedDate: '2020-01-02',
            img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 3,
            title: 'Movie 3',
            releasedDate: '2020-01-03',
            img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg'
        },
        {
            id: 4,
            title: 'Movie 4',
            releasedDate: '2020-01-04',
            img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 5,
            title: 'Movie 5',
            releasedDate: '2020-01-05',
            img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 6,
            title: 'Movie 6',
            releasedDate: '2020-01-06',
            img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        }
    ]
};

function AppStore(state = initialState, action) {

    console.log('appStore', 
    state,
    action.type, action.payload);


    switch (action.type) {
        case 'OPEN_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: true};
        case 'CLOSE_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: false};
        default:
            return state;
    }

}


export default createStore(AppStore);