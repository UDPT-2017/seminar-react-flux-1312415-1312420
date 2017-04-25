import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route
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
                        <BrowserLink link="/" text="APP" />
                        <BrowserLink link="/about" text="ABOUT" />
                        <BrowserLink link="/test/TEST-13223" text="TEST-1" />
                        <BrowserLink link="/test/TEST-22323" text="TEST-2"/>
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