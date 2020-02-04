import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import {requestFetchHomePage} from '../../redux/actions/pages/home';

const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state);
    const onFetch = () => {
        dispatch(requestFetchHomePage());
    }
    console.log("state: ", homeData);
    return (
        <button className="btn btn-primary" onClick={onFetch}>Fetch</button>
    );
}

export default Home;