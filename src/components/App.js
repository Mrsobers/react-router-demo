import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import About from '../pages/about'
import Home from '../pages/home'
import MyNavLink from './MyNavLink'

class App extends React.Component{
    render(){
        return (
            <div>
                <div className='row'>
                    <div className='col-xs-offset-2 col-xs-8'>
                        <div className='page-header'>
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-2 col-xs-offset-2'>
                        <div className='list-group'>
                            <MyNavLink className='list-group-item' to='/about'>About</MyNavLink>
                            <MyNavLink className='list-group-item' to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className='panel'>
                            <div className='panel-body'>
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App