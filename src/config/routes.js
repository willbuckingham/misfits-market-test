import React from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export default [
  {
    path: '/',
    exact: true,
    component: <Home />,
  },
  {
    path: '*',
    exact: false,
    component: <NotFound />,
  },
]
