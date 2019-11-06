import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Start extends Component {
  render() {
    return (
        <div>  
            <h2>用户名：<input type="text"/></h2>
            <h2>密码：<input type="password"/></h2>
            <button class="loginin"><h2><Link to='/home'>登录</Link></h2></button>
        </div>
    )
  }
}

