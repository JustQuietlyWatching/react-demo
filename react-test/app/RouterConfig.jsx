import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {routes} from './router.config.js'

export default class RouterConfig extends React.Component {

    render() {
        return (
            <BrowserRouter>
                {/* kick it all off with the root route */}
                <div>
                    {renderRoutes(routes)}
                </div>

            </BrowserRouter>

        )
    }


}