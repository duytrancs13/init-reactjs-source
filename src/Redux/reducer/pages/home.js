import * as actionTypes from '../../constant/pages/home';

const defaultState = {
    data: [],
    error: false,
    loading: false
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_FETCH_HOME_PAGE:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_HOME_PAGE_ON_SUCCESS: 
        console.log("action.data: ", action.home);
            return {
                ...state,
                data: action.home,
                loading: false
            };
        case actionTypes.FETCH_HOME_PAGE_ON_ERROR: 
            return {
                ...state,
                news: action.error,
                loading: false
            }
        default:
            return state;
    }
}


export default reducer;