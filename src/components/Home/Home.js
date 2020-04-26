import React, { useEffect, useState } from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { requestFetchHomePage } from '../../redux/actions/pages/home';
import Loading from '../Loading/Loading';
import { getAccessToken } from 'services/access-token';
import { requestFetchUserInfo } from 'redux/actions/userInfo';
import { useHistory } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const {home} = useSelector(state => state.pages);
    const [loading, setLoading] = useState(false);
    const [homeData , setHomeData] = useState(null);
    const {userInfo} = useSelector(state => state )
    useEffect(() => {
        dispatch(requestFetchHomePage());
        const token = getAccessToken();
        if(token && !userInfo) {
            dispatch(requestFetchUserInfo())
        } else {
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        const {loading, data} = home;
        setLoading(loading);
        if(Object.entries(data).length > 0 ) {
            setHomeData(data);
        }
    }, [home])
    return (
        <div>
            {/* <a href="/login">Login</a> */}
    {userInfo && <> <h1>{userInfo.name}</h1> <a >Logout</a></>}
            <h1>Home page</h1>
           { loading ? <Loading /> : homeData ? 
            <ul>
                {homeData.title}
            </ul> : 
            'Không có dữ liệu'}
        </div>
    );
}

export default Home;