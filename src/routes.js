import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Login from 'components/Login/Login'

const routes = [
    { path: '/', exact: true, component: () => <Home /> },
    { path: '/about', exact: true, component: () => <About /> },
    { path: '/login', exact: true, component: () => <Login /> },
]

export default routes