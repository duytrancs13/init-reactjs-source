// import  {AnyAction}  from 'redux';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { login, updateTokenByRefreshToken, fetchUserInfo } from 'services/internal-api';
import { AUTH_LOGIN, requestLoginOnError, requestLoginOnSuccess } from './../../actions/pages/login';
import { requestFetchUserInfo, REQUEST_FETCH_USER_INFO, fetchUserInfoOnSuccess, fetchUserInfoOnError } from './../../actions/userInfo';
import { setAccessToken, setAccessRefreshToken, getAccessRefreshToken } from 'services/access-token';

function * requestLoginSaga(actions) {
    const {email, password} = actions;
    try {
        const data = yield call(login, email, password);
        const {token, refreshToken} = data;
        
        // save token
        setAccessToken(token);
        setAccessRefreshToken(refreshToken);

        // yield put(requestFetchUserInfo())
        yield put(requestLoginOnSuccess())
    } catch (error) {
        yield put(requestLoginOnError(error))
    }
}

function * fetchUserInfoSaga() {
    try {
       const userInformation = yield call(fetchUserInfo);
       yield put(fetchUserInfoOnSuccess(userInformation))
    } catch (error) {
        const { code } = error.response.data.errors[0];
        if (code === "005") {
            const refreshToken = getAccessRefreshToken();
            const data = yield call(updateTokenByRefreshToken, refreshToken);
            setAccessToken(data.token);
            setAccessRefreshToken(data.refreshToken);
            try {
                const userInformation = yield call(fetchUserInfo);
                yield put(fetchUserInfoOnSuccess(userInformation))
            } catch (error) {
                console.log(error);
            }
        } else {
            yield put(fetchUserInfoOnError(error))
        }
    }
}
export default function* watchRequestLoginSaga() {
    yield all([
        yield takeLatest(AUTH_LOGIN, requestLoginSaga),
        yield takeLatest(REQUEST_FETCH_USER_INFO, fetchUserInfoSaga),
    ])
}