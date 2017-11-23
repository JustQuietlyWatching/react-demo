import { renderRoutes } from 'react-router-config'
import Page1 from './Page1.jsx'
import Hello from './Hello.jsx'
import {BrowserRouter,Route} from 'react-router-dom'

export const routes = [

        { path: '/',
            exact: true,
            component: Page1
        },
        {
            path: '/home',
            exact: true,
            component: Hello
        }

]