import React from 'react'
import {NavLink} from 'react-router-dom'

class MyNavLink extends React.Component{
    render(){
        return <NavLink {...this.props} activeClassName='activeClass' />
    }
}
export default MyNavLink