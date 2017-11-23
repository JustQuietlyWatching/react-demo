import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Page1 from './Page1.jsx'
import Hello from './Hello.jsx'

export default class Router1 extends  React.Component {

    render(){
        return(
            <Router>
                <div>
                    <Route path="/page1/:id" component={Hello}></Route>
                    <Route path="/page"  component={Page1}></Route>
                </div>
            </Router>
        )
    }

}