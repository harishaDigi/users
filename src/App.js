import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Login from './components/Routes/Login'
import store,{history}  from './Redux/store'
import Books from './components/Routes/Books'
import {Route, withRouter,Switch,Link, BrowserRouter as Router} from 'react-router-dom';
import { ConnectedRouter} from "connected-react-router";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { tsConstructorType } from '@babel/types';
import Routes from './components/Routes'

class App extends React.Component{
  
  componentWillMount(){
    console.log("entered in componentWillMount====");
    
  }
  componentDidMount(){
    NotificationManager.info('Info message')
    console.log("entered in componentDidMount====");
  }
  render(){
  return (
    <Provider store={store}>
            <Router history={history}>
                  <Routes/> 
            </Router>
            <NotificationContainer/>
    </Provider> 
  );
}
}

export default App;
