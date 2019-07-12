import React from 'react'
import MyNavLink from '../components/MyNavLink'
import {Switch,Route,Redirect} from 'react-router-dom'
import News from './news'
import Messages from './message'

class Home extends React.Component{
    render(){
        return (
            <div>
                <h2>Home Component</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Messages</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Messages} />
                        <Redirect to='/home/news'/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home