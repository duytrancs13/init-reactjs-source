import { all } from 'redux-saga/effects';
import watchFetchHomePageSaga from './pages/home';
import watchRequestLoginSaga from './pages/login';
export default function* rootSaga() {
    yield all([
        watchFetchHomePageSaga(), 
        watchRequestLoginSaga()
    ]);
}

