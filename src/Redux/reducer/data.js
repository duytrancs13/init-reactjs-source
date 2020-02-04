import * as actionTypes from '../constant/ActionTypes'

const reducer = (state = {count: 0, news: null, loading: false}, action) => {
    switch(action.type) {
        case actionTypes.ON_CLICK: 
        console.log(action);
        state = Object.assign({}, state, action.count)
        break;

        case actionTypes.GET_NEWS: 
        state = {...state, loading: true};
        break;

        case actionTypes.NEWS_RECEIVED: 
        state = {...state, news: action.json[0], loading: false};
        break;
        
        default: 
        return state;
    }
    return state
}


export default reducer;