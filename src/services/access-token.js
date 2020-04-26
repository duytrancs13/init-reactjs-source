export const getAccessToken = () => JSON.parse(window.localStorage.getItem("token"));
export const getAccessRefreshToken = () => JSON.parse(window.localStorage.getItem("refreshToken"));

export const setAccessToken = (token) => {
    window.localStorage.setItem("token", JSON.stringify(token));
}

export const setAccessRefreshToken = (refreshToken) => {
    window.localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
}
