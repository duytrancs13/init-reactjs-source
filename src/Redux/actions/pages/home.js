export const REQUEST_FETCH_HOME_PAGE = 'REQUEST_FETCH_HOME_PAGE';
export const FETCH_HOME_PAGE_ON_SUCCESS = 'FETCH_HOME_PAGE_ON_SUCCESS';
export const FETCH_HOME_PAGE_ON_ERROR = 'FETCH_HOME_PAGE_ON_ERROR';

export const requestFetchHomePage = () => ({
    type: `REQUEST_FETCH_HOME_PAGE`
})

export const fetchHomePageOnSuccess = (home) => ({
    type: FETCH_HOME_PAGE_ON_SUCCESS,
    home
})

export const fetchHomePageOnError = (error) => ({
    type: FETCH_HOME_PAGE_ON_ERROR,
    error
})