import React, { useEffect, useState } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { requestFetchHomePage } from '../../redux/actions/pages/home';
import Loading from '../Loading/Loading';

const Home = () => {
    const dispatch = useDispatch();
    const {home} = useSelector((state) => state);
    const [loading, setLoading] = useState(false);
    const [homeData , setHomeData] = useState([]);
    useEffect(() => {
        dispatch(requestFetchHomePage());
    }, [dispatch])

    useEffect(() => {
        const {loading, data} = home;
        setLoading(loading);
        if(data.length > 0 ) {
            setHomeData(data);
        }
    }, [home])
    return (
        <div>
            <h1>Home page</h1>
           { loading ? <Loading /> : homeData.length > 0 ? 
            <ul>
                {homeData.map((home, i) => <li key={i}>{home.title}</li>)}
            </ul> : 
            'Không có dữ liệu'}
        </div>
    );
}

export default Home;