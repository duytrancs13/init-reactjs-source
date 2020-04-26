
import { AUTH_LOGIN, AUTH_LOGIN_ON_SUCCESS, AUTH_LOGIN_ON_ERROR } from './../../actions/pages/login';
const defaultState = {
    loggedIn: false,
    error: false,
    loading: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                loading: true
            };
        case AUTH_LOGIN_ON_SUCCESS: 
            return {
                ...state,
                loggedIn: true,
                error: false,
                loading: false
            };
        case AUTH_LOGIN_ON_ERROR: 
            return {
                ...state,
                loggedIn: false,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}