import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../Redux/constant/ActionTypes';


function * fetchNews() {
    const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-04&sortBy=publishedAt&apiKey=f6d45570ef804d13aec8f16c014dd425')
        .then(response => response.json(), );    
  yield put({ type: actionTypes.NEWS_RECEIVED, json: json.articles, });
}

function* actionWatcher() {
    yield takeLatest(actionTypes.GET_NEWS, fetchNews)
}

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }