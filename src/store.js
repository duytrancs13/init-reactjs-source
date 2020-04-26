import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer/index';
import rootSaga from 'redux/sagas';
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
  ];

const store = createStore(reducer,composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;