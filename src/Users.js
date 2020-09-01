import React from 'react'
import './index.css'
import { Checkbox } from '@material-ui/core';
class Users extends React.Component{
          constructor(){
                    super()
                    this.state={
                              users :"",
                              check:false
                    }
          }
          componentWillMount(){
                    fetch('https://randomuser.me/api?results=10')
                    .then(res => res.json())
                    .then((data) => {
                              this.setState({ users: data.results })
                    })
          }
          handleChange =(e)=>{
              this.setState({[e.target.name] : e.target.value})
         }
          render(){
                    return(
                              <div className="main-container">
                                        <div className="container">
                                             {
                                                       this.state.users.length>0?this.state.users.map((user)=>{
                                                                 
                                                               return(
                                                                         <div className="component">
                                                                         <div className="main-component">
                                                                         <img src = {user.picture.medium} style={{height:'100px', width:'100px',borderRadius:'50%'}}/>
                                                                         
                                                                         <div className="name-panel"><p>{user.name.title} {user.name.first}{user.name.last}</p></div>
                                                                         <div className="checkbox-panel">   <Checkbox name="check" onChange={this.handleChange}/></div>
                                                                    
                                                                         </div>
                                                                         </div>
                                                               )
                                                       
                                                  }):""
                                              }
                                        </div>
                              </div>
                    )
          }
}
export default Users