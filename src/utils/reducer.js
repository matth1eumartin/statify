import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    username: '',
    topSongs: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state, 
                token:action.token,
            }
        }
        case reducerCases.SET_USERNAME : {
            return {
                ...state,
                username:action.username,

            }
        }
        case reducerCases.SET_TOP_SONGS : {
            return {
                ...state,
                topSongs :action.topSongs,
            }
        }
        default: 
           return state; 
    }
};

export default reducer;
