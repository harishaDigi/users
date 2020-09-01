import React from 'react';


import { Provider } from 'react-redux'
import Login from './Login'
import store from '../../Redux/store'
import Books from './Books'
import {Route, withRouter,Switch,Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Routes extends React.Component{
  
  componentWillMount(){
     
    
  }
  componentDidUpdate(){
    NotificationManager.info('Info message')
    console.log("entered in componentDidMount====");
  }
  isValid(){

    
  }
  render(){
  return (
    <Provider store={store}>
     <Switch>
       <Route exact path = "/"  component = {Login}></Route>
       <Route path = "/books" component ={Books} ></Route>
       </Switch>
      <NotificationContainer/>
    </Provider> 
  );
}
}

export default withRouter(Routes);
