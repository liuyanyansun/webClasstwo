import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';

export default class Jing extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    
    componentDidUpdate(){
        console.log(this.props.match)
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    render() {
        console.log(this.props)
        return (
            <div>  
                {
                    this.state.data.map((item,idx)=>(        
                        <li key="item" style={{listStyle:'none'}}>
                        <img src={item.author.avatar_url} alt="" style={{width:35,height:35}}/>
                        <span dangerouslySetInnerHTML={{__html:item.reply_count+'/'}} style={{width:5,height:35}}></span>
                        <span dangerouslySetInnerHTML={{__html:item.visit_count}} style={{width:10,height:35}}></span>
                        <Link to={'/topic/'+item.id}><span class="gary">{item.title}</span></Link>
                        <span dangerouslySetInnerHTML={{__html:'3天前'}} style={{float:"right"}}></span>
                        <img src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt="" style={{width:35,height:35,float:"right"}} />
                        </li>
                    ))
                }
            </div>
        )
    }
}