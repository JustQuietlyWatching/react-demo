import React from 'react'
import {Link} from 'react-router-dom'

export default class Hello extends React.Component {


    componentWillMount(){
        // alert(this.props.location.state.some)
    }

    render(){
        return(
            <div>
                <Link to="/page">to page1/</Link>

                hello</div>
        )
    }
}