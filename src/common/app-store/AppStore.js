import { createStore } from "redux";

const initialState = {
    isAuthDialogOpen: false,
    loggedUser : {
        username: 'Eduardo'
    },
    releasedMovies: [
      
    ],
    upcomingMovies: [
    ],
    artists: []
};

function AppStore(state = initialState, action) {

    // console.log('appStore.state', state);
    // console.log('appStore.action', action);


    switch (action.type) {
        case 'OPEN_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: true};
        case 'CLOSE_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: false};
        case 'AUTH_LOGOUT':
            return {...state, loggedUser: null};    
        case 'AUTH_LOGIN':
            return {...state, loggedUser: action.payload};    
        case 'LOAD_ARTISTS':
            return {...state, artists: action.payload};                
        case 'LOAD_GENRES':
            return {...state, genres: action.payload};                
        case 'LOAD_MOVIES':
            return {...state, 
                    releasedMovies: action.payload.filter(item=>{return item.status==='RELEASED'}),
                    upcomingMovies: action.payload.filter(item=>{return item.status!=='RELEASED'}),
                };    
        default:
            return state;
    }

}


export default createStore(AppStore);