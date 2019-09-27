import * as actionTypes from '../constant/ActionTypes';

export const click = (count) => {
    return {
        type: actionTypes.ON_CLICK,
        count
    }
}