import * as actionTypes from '../constant/ActionTypes'

const reducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case actionTypes.ON_CLICK: 
        console.log(action);
        state = Object.assign({}, state, action.count)
        break;
        
        default: 
        return state;
    }
    return state
}


export default reducer;