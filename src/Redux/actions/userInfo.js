export const REQUEST_FETCH_USER_INFO = 'REQUEST_FETCH_USER_INFO';
export const FETCH_USER_INFO_ON_SUCCESS = 'FETCH_USER_INFO_ON_SUCCESS';
export const FETCH_USER_INFO_ON_ERROR = 'FETCH_USER_INFO_ON_ERROR';

export const requestFetchUserInfo = () => ({
    type: REQUEST_FETCH_USER_INFO
})

export const fetchUserInfoOnSuccess = (userInfo) => ({
    type: FETCH_USER_INFO_ON_SUCCESS,
    userInfo
})

export const fetchUserInfoOnError = (error) => ({
    type: FETCH_USER_INFO_ON_ERROR,
    error
})