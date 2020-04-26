import { combineReducers } from 'redux';
import pages from './pages';
import userInfo from './userInfo.js';

export default combineReducers({
    pages,
    userInfo
});