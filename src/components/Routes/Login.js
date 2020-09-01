import React, {useState} from 'react'
import  '../styles/index.css'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as actionLib from '../../Redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends React.Component{
          constructor(props){
                    super(props)
                    this.state={
                              userid:"",
                              password:""
                    }
          }
          componentWillMount(){
                  console.log("componentWillMount======");
          }
          handleChange=(e)=>{
                    this.setState({[e.target.name] : e.target.value})
          }
          componentWillReceiveProps(newprops){
                console.log("entered in componentWillReceiveProps====",newprops)
                if(newprops.store.user.login == true){
                        this.props.history.push('/books')
                  }else{
                          console.log("login authentication failed=======");
                  }
          }
          handleClick = (e)=>{
                  console.log("entered in handleClick------");
                //   let {actions} =  this.props
                //   actions.loginRequest(this.state)
                if(this.state.name=='hari'&&this.state.pass=='hari'){
                     this.props.history.push('/books')
                }else{
                        alert("invalid credentials")
                }
                  console.log("Actions=======",actions);
               
                
           }
          render(){
                  console.log("---->", this.props.store)
                    return(
                              <div className='main-div'>
                              <div className="login-container">
                                 <div className="title">
                                          <p>Welcome to Users Blog</p>
                                        </div>
                                <div className="input-field">
                                     
                                        <TextField 
                                                  type="text"
                                                  variant="outlined"
                                                  name="userid"
                                                  onChange={this.handleChange}
                                                  autoFocus="true"
                                                  placeholder="enter the username / email"
                                                  fullWidth
                                                  value={this.state.userid}/>
                                        </div>  
                                        <div className="input-field">      
                                        <TextField 
                                                  type="password"
                                                  variant="outlined"
                                                  autoFocus="true"
                                                  name="password"
                                                  onChange={this.handleChange}
                                                  placeholder="enter the password"
                                                  fullWidth
                                                  value={this.state.password}/><br/>
                                          </div>
                                          <Button style={{margin:"5%"}}
                                                        variant="contained" 
                                                        color="primary" 
                                                        onClick={this.handleClick}>Login</Button>
                              </div>
                              </div>
                    )
          }
}
const mapStateToProps = (state)=>({
        store:state
})
const mapDispatchToProps=(dispatch)=>({
        actions:bindActionCreators(actionLib,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)