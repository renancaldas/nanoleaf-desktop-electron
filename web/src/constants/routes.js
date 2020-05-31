

import React from 'react';

import Home from '../app/Home/Home';
import About from '../app/About/About';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const routes = [
    {
        label: 'Home',
        path: '/',
        component: <Home />,
        icon: <FavoriteIcon />
    },
    {
        label: 'About',
        path: '/about',
        component: <About />,
        icon: <RestoreIcon />
    }
]

export default routes;