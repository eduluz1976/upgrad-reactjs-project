import { createStore } from "redux";

const initialState = {
    isAuthDialogOpen: false,
    loggedUser : {
        username: 'Eduardo'
    },
    releasedMovies: [
        {
            id: 1,
            title: 'Movie 1',
            release_date: '2020-01-01',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
        },
        {
            id: 2,
            title: 'Movie 2',
            release_date: '2020-01-02',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 3,
            title: 'Movie 3',
            release_date: '2020-01-03',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg'
        },
        {
            id: 4,
            title: 'Movie 4',
            release_date: '2020-01-04',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 5,
            title: 'Movie 5',
            release_date: '2020-01-05',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 6,
            title: 'Movie 6',
            release_date: '2020-01-06',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        }
    ],
    upcomingMovies: [
        {
            id: 1001,
            title: 'Movie 1',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'
        },
        {
            id: 1002,
            title: 'Movie 2',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 1003,
            title: 'Movie 3',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg'
        },
        {
            id: 1004,
            title: 'Movie 4',
            release_date: '2020-01-04',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png',
            genres: ['Action', 'Adventure'],
            duration: 150,
            critics_rating: 3.8,
            story_line: 'This is the plot...',
            wiki_url: 'https://...',
            trailer_url: '',
            artists:[
                {
                    id: 1,
                    first_name: 'Ranbir',
                    last_name: 'Kapoor',
                    profile_url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Ranbir_Kapoor_promoting_Bombay_Velvet.jpg'
                },
                {
                    id: 2,
                    first_name: 'Matthew',
                    last_name: 'McConaughey',
                    profile_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg'
                },
                {
                    id: 3,
                    first_name: 'Matthew',
                    last_name: 'McConaughey',
                    profile_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg/1024px-Matthew_McConaughey_-_Goldene_Kamera_2014_-_Berlin.jpg'
                }
            ]

        },
        {
            id: 1005,
            title: 'Movie 5',
            release_date: '2020-01-05',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        },
        {
            id: 1006,
            title: 'Movie 6',
            release_date: '2020-01-06',
            poster_url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png'
        }
    ]
};

function AppStore(state = initialState, action) {

    console.log('appStore.state', state);
    console.log('appStore.action', action);


    switch (action.type) {
        case 'OPEN_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: true};
        case 'CLOSE_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: false};
        case 'AUTH_LOGOUT':
            return {...state, loggedUser: null};    
        case 'AUTH_LOGIN':
            return {...state, loggedUser: action.payload};    
        default:
            return state;
    }

}


export default createStore(AppStore);