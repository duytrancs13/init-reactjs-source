import { put, takeLatest, call } from 'redux-saga/effects';
import { REQUEST_FETCH_HOME_PAGE, fetchHomePageOnSuccess, fetchHomePageOnError } from 'redux/actions/pages/home';
import { fetchHomePage } from 'services/internal-api';

function * fetchHomePageFlow() {
    try {
        const data = yield call(fetchHomePage);
        yield put(fetchHomePageOnSuccess(data))
    } catch (error) {
        yield put(fetchHomePageOnError(error))
    }
}

export default function* watchFetchHomePageSaga() {
    yield takeLatest(REQUEST_FETCH_HOME_PAGE, fetchHomePageFlow)
}