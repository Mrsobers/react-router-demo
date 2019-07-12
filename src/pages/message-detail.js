import React from 'react'

function MessageDetail(props){

    const allMessages = [
        {id:3,title:'message333',content:'我爱你，祖国'},
        {id:5,title:'message555',content:'我爱你，老婆'},
        {id:7,title:'message777',content:'我爱你，孩子'},
    ]

    const {id} = props.match.params

    const message = allMessages.find((m)=>m.id===id*1)

    return (
        <ul>
            <li>id:{message.id}</li>
            <li>title:{message.title}</li>
            <li>content:{message.content}</li>
        </ul>
    )
}

export default MessageDetail;