import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import BrowserLink from './BrowserLink.jsx';
import App from './App.jsx';
import About from './About.jsx';
import Test from './Test.jsx';
class Index extends Component {
    render() {
        return (

            <Router>
                <div>
                    <div className="nav nav-tabs">
                        <li role="presentation">
                            <Link to='/'>
                                HOME
                            </Link>
                        </li>
                        <li role="presentation">
                            <Link to='/about'>
                                ABOUT
                            </Link>
                        </li>
                        <li role="presentation">
                            <Link to='/test/Test-1'>
                                Test-1
                            </Link>
                        </li>
                        <li role="presentation">
                            <Link to='/test/Test-2'>
                                Test-2
                            </Link>
                        </li>
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