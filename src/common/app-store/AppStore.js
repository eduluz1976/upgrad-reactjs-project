import { createStore } from "redux";

const initialState = {
    isAuthDialogOpen: false,
    loggedUser : {
        username: 'Eduardo'
    },
    releasedMovies: [
      
    ],
    upcomingMovies: [
    ]
};

function AppStore(state = initialState, action) {

    switch (action.type) {
        case 'OPEN_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: true};
        case 'CLOSE_AUTH_DIALOG':
            return {...state, isAuthDialogOpen: false};
        case 'AUTH_LOGOUT':
            return {...state, loggedUser: null};    
        case 'AUTH_LOGIN':
            return {...state, loggedUser: action.payload};    
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