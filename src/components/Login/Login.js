import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { requestLogin } from 'redux/actions/pages/login';
import { useHistory } from "react-router-dom";
import Loading from 'components/Loading/Loading';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setpPassword] = useState('');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { login } = useSelector(state => state.pages)
    const { userInfo } = useSelector(state => state)
    const history = useHistory();

    useEffect(() => {
        const { loading, loggedIn, error } = login;
        setLoading(loading);
        if(loggedIn) {
            history.push('/')
        }
        if(error) {
            console.log(error);
        }
    }, [login])
    useEffect(() => {
        if(!userInfo) {
            history.push('/')
        }
    }, [])
    const onLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(requestLogin(email, password))
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name === "email") {
            setEmail(value)
        } else if(name === "password") {
            setpPassword(value)
        }
    }
    return (
    <div>
        <form onSubmit={onLogin}>
            <input name="email" type="text" onChange={handleInputChange} />
            <input name="password" type="password" onChange={handleInputChange}/>
            <button type="submit">Dang nhap</button>
        </form>
        {loading && <Loading /> }
    </div>)
}

export default Login;