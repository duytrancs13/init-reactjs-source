import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../redux/constant/pages/home';
import { fetchHomePageOnSuccess } from '../redux/actions/pages/home';

const apiKey = "0033671fb6de4da48cd1c08bac733fb2";

function * fetchHomePageFlow() {
    const json = yield fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-08&sortBy=publishedAt&apiKey=${apiKey}`)
        .then(response => response.json(), );   
  yield put(fetchHomePageOnSuccess(json.articles));
}

function* actionWatcher() {
    yield takeLatest(actionTypes.REQUEST_FETCH_HOME_PAGE, fetchHomePageFlow)
}

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }