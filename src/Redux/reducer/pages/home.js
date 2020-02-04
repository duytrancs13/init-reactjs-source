import * as actionTypes from '../../constant/pages/home';

const reducer = (state = {news: null, loading: false}, action) => {
    switch(action.type) {
        case actionTypes.REQUEST_FETCH_HOME_PAGE:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_HOME_PAGE_ON_SUCCESS: 
            return {
                ...state,
                news: action.json[0],
                loading: false
            }
        default:
            return state;
    }
}


export default reducer;