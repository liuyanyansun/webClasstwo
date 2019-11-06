import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Allone from './container/container2/container3/container4/Allone';
export default class App extends Component {
    render() {
        return (
            <Router database="webClasstwo">
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/topic/:page' component={Allone}/>
                    </div>
                    <div className="right">
                            
                    </div>
                </div>
            </Router>
        )
    }
}