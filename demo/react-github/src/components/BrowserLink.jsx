import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class BrowserLink extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <li role="presentation" >
                <Link to={this.props.link}>
                    {this.props.text}
                </Link>
            </li>
        )
    }
}

export default BrowserLink;