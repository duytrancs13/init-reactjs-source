import * as actionTypes from '../../constant/pages/home';

export const requestFetchHomePage = () => ({
    type: actionTypes.REQUEST_FETCH_HOME_PAGE
})

export const fetchHomePageOnSuccess = (home) => ({
    type: actionTypes.FETCH_HOME_PAGE_ON_SUCCESS,
    home
})

export const fetchHomePageOnError = (error) => ({
    type: actionTypes.FETCH_HOME_PAGE_ON_ERROR,
    error
})