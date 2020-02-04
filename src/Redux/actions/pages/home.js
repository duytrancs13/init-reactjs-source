import * as actionTypes from '../../constant/pages/home';

export const requestFetchHomePage = () => {
    return {
        type: actionTypes.REQUEST_FETCH_HOME_PAGE
    }
}

export const fetchHomePageOnSuccess = () => {
    return {
        type: actionTypes.FETCH_HOME_PAGE_ON_SUCCESS
    }
}

export const fetchHomePageOnError = () => {
    return {
        type: actionTypes.FETCH_HOME_PAGE_ON_ERROR
    }
}