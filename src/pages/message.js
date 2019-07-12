import React from 'react'
import {Route} from 'react-router-dom'
import MessageDetail from './message-detail'
import MyNavLink from '../components/MyNavLink'

class Message extends React.Component{
    
    state = {
        messages:[]
    }
    
    componentDidMount(){
        setTimeout(()=>{
            const messages=[
                {id:3,title:'message333'},
                {id:5,title:'message555'},
                {id:7,title:'message777'},
            ]
            this.setState({messages})
        },1000)
    }

    showDetail= (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }
    showDetail2= (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = ()=> {
        this.props.history.goForward();
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.messages.map((message,index)=>(
                        <li key={index}>
                            <MyNavLink to={`/home/message/messagedetail/${message.id}`}>{message.title}</MyNavLink>
                            &nbsp;&nbsp;<button onClick={()=>{this.showDetail(message.id)}}>push()查看</button>&nbsp;<button onClick={()=>{this.showDetail2(message.id)}}>replace()查看</button>
                        </li>
                    ))}
                </ul>
                <p><button onClick={this.back}>回退</button><button onClick={this.forward}>前进</button></p>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>
        )
    }
}

export default Message;