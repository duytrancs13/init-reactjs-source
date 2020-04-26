export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_ON_SUCCESS = 'AUTH_LOGIN_ON_SUCCESS';
export const AUTH_LOGIN_ON_ERROR = 'AUTH_LOGIN_ON_ERROR';

export const requestLogin = (email: string, password: string) => ({
    type: AUTH_LOGIN,
    email,
    password
})
export const requestLoginOnSuccess = () => ({
    type: AUTH_LOGIN_ON_SUCCESS,
})
export const requestLoginOnError = (error: any) => ({
    type: AUTH_LOGIN_ON_ERROR,
    error
})