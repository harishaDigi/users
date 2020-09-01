import React from 'react'
import './styles/index.css'

class Orchestrator extends React.Component{
          constructor(props){
                    super(props);
          }
          render(){
          return(
                    <div className="container">
                    <div className="row">
                      <div className="col-2" style={{height:"100%",  backgroundColor: "transparent"}}>
                      <div className="side-nav-main">
                       
                        <div className="side-nav-top">
                                  <img src="https://i.pinimg.com/236x/8e/d5/f8/8ed5f8312890781a11f0f657cf906e99.jpg" width="60px" height="60px"/>
                                  top columns
                        </div>
                        <div className="side-nav-bottom">
                        <p>bottom part</p>
                   
                                  <ul>
                                            <li>Processes</li>
                                            <li>Schedules</li>
                                            <li>user management</li>
                                            <li>Robots</li>
                                            <li>sdfghjgf</li>
                                  </ul>
                  
                        </div>
                        </div>
                      </div>
                      <div className="col-8">
                      <div className="main-container">
                       <div className="top-main-container">
                          <h1>Business Process</h1>
                       </div>
                       <div className="bottom-main-container">
                       <div className="body-cards">
                         <p> Flow1</p>
                       </div>
                       <div className="body-cards">
                         <p> Flow2</p>
                       </div>
                       <div className="body-cards">
                         <p> Flow3</p>
                       </div>
                       <div className="body-cards">
                         <p> Flow4</p>
                       </div>

                       </div>
                       </div>
                      </div>

                      </div>
                    
                      </div>
                  
               
           )
}
}

export default Orchestrator;