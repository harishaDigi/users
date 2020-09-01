import React from 'react'
import axios from 'axios'
class Users extends React.Component{
          constructor(props){
                    super(props);
                    this.state={
                              users:[]
                    }
          }
          componentWillMount(){
                 let data =   axios('https://jsonplaceholder.typicode.com/users').then(res=>{
                    this.setState({
                              users : res.data
                    })
                 })
                 }
          render(){
                    console.log("this.state.users========",this.state.users)
                    return(
                              <div >
                                         <table>
                                                   <thead>
                                                            <tr>
                                                                      <th>Id</th>
                                                                      <th>Name</th>
                                                                      <th>User Name</th>
                                                                      <th>Email</th>
                                                                       <th>Phone</th>
                                                                       <th>Website</th>
                                                            </tr>
                                                  </thead>         
                                                            {
                                                                      this.state.users.map((user)=>{
                                                                                return(
                                                                                          <tbody>
                                                                                          <tr>
                                                                                                    <td>{user.id}</td>
                                                                                                    <td>{user.name}</td>
                                                                                                    <td>{user.username}</td>
                                                                                                    <td>{user.email}</td>
                                                                                                    <td>{user.phone}</td>
                                                                                                    <td>{user.website}</td>
                                                                                          </tr>
                                                                                          </tbody>
                                                                                )
                                                                      })
                                                            }  
                                         </table>
                              </div>
                    )
          }
}
export default Users;