import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import React from 'react';

class NotificationComp extends React.Component{
          constructor(){
                    super()
                    this.state={
                              breakpoint:false
                    }
          }
          handleClick =()=>{
                    //this.createNotification('info')
                    NotificationManager.success('Info message');
                    this.setState({
                              breakpoint:!this.state.breakpoint
                    })

          }
          render(){
                    return(
                              <div>
                                        <button onClick={this.handleClick}>succs notifications</button>
                                        {this.state.breakpoint?(
                                                  <div id ="dot" style={{width:"10px",height:"10px",backgroundColor:"blue",borderRadius:"10px"}}>
                                                       
                                                  </div>
                                        ):null}
                                        <NotificationContainer/>

                              </div>
                    )
          }
}
export default NotificationComp