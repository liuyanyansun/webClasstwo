import React, { Component } from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import All from './container2/All';
import Give from './container2/Give';
import Jinghua from './container2/Jinghua';
import Request from './container2/Request';
import Share from './container2/Share';
export default class Home extends Component {
  render() {
    // console.log(this.props.match)
    var url = this.props.match.url
    return (
      <>
          <div>
              <Link to={`${url}/all`}>全部</Link>
              <Link to={`${url}/jinghua` }class="all">精华</Link>
              <Link to={`${url}/share`}class="all">分享</Link>
              <Link to={`${url}/request`}class="all">问答</Link>
              <Link to={`${url}/give`}class="all">招聘</Link>
          </div>
          <div>
            <Switch>
              <Route path={url+'/all'} component={All}/>
              <Route path={url+'/jinghua'} component={Jinghua}/>
              <Route path={url+'/share'} component={Share}/>
              <Route path={url+'/request'} component={Request}/>
              <Route path={url+'/give'} component={Give}/>
              <Redirect from ='/home' to="/home/all/1"></Redirect>
            </Switch>
            
          </div>
      </>
    )
  }
}
