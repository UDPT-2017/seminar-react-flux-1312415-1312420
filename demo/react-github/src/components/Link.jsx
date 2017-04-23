import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './App.jsx';
import About from './About.jsx';
import Test from './Test.jsx';

class Index extends Component {
    render(){
        return(

            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/">App</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/test/phan">test phan</Link></li>
                            <li><Link to="/test/chon">test chon</Link></li>
                        </ul>
                    </div>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/about' component={About}/>
                    <Route path="/test/:id" component={Test}/>
                </div>
            </Router>
        )
    }
}
export default Index