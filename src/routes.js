import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'

const routes = [
    { path: '/', exact: true, component: () => <Home /> },
    { path: '/about', exact: true, component: () => <About /> },
]

export default routes