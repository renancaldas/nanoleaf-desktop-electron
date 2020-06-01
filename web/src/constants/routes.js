

import React from 'react';

import Home from '../app/Home/Home';
import About from '../app/About/About';
import Splashscreen from '../app/Splashscreen/Splashscreen';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingIcon from '@material-ui/icons/Settings';

const routes = [
    {
        isDashboardMenu: true,
        isFullscreen: false,
        label: 'Home',
        path: '/',
        component: <Home />,
        icon: <DashboardIcon />
    },
    {
        isDashboardMenu: true,
        isFullscreen: false,
        label: 'Settings',
        path: '/about',
        component: <About />,
        icon: <SettingIcon />
    },
    {
        isDashboardMenu: false,
        isFullscreen: true,
        label: null,
        path: '/splash',
        component: <Splashscreen />,
        icon: null
    }
]

export default routes;