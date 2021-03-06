import { REQUEST_FETCH_HOME_PAGE, FETCH_HOME_PAGE_ON_SUCCESS, FETCH_HOME_PAGE_ON_ERROR } from '../../actions/pages/home';

const defaultState = {
    data: [],
    error: false,
    loading: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case REQUEST_FETCH_HOME_PAGE:
            return {
                ...state,
                loading: true
            };
        case FETCH_HOME_PAGE_ON_SUCCESS: 
        console.log(action);
            return {
                ...state,
                data: action.home,
                loading: false
            };
        case FETCH_HOME_PAGE_ON_ERROR: 
            return {
                ...state,
                news: action.error,
                loading: false
            }
        default:
            return state;
    }
}