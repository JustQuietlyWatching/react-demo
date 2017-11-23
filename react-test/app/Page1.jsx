import React from 'react'
import {Link} from 'react-router-dom'

export default class Page1 extends React.Component {


    componentWillMount(){
        // this.props.history.push('/page1/p',{some:'123'})

    }

    render(){
        return(
            <div>
                <Link to="/page1/p">to hello</Link>
                page1</div>
        )
    }
}