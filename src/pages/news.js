import React from 'react'

class News extends React.Component{
    
    state={
        newsArr:['news1','news2','news3']
    }

    render(){
        return (
            <ul>
                {this.state.newsArr.map((news,index)=><li key={index}>{news}</li>)}
            </ul>
        )
    }
}

export default News;