import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionLib from '../../Redux/actions'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
class Books extends React.Component{
          constructor(props){
                    super(props)
                    this.state={
                            'name':"",
                            'new_name':""
                    }
          }
          componentWillMount(){
                    console.log("entered in componentwillmount");
                    
          }
          handleChange = (e)=>{
            this.setState({[e.target.name] : e.target.value})
          }
          handleSubmit=(e)=>{
                  
          }
          render(){
                    return(
                              <div>
                                     <TextField id="english2hindi" type="text" name="name" onChange={(e)=>this.handleChange(e)} value={this.state.name} />
                                     <Button variant="contained" color="primary" onSubmit={(e)=>this.handleSubmit(e)}>Convert</Button>
                                     {
                                             this.state.new_name? <TextField id="time" type="text"  value={this.state.new_name} />:null
                                     }
                              </div>
                    )
          }
}

const mapStateToProps =(state)=>({
          store:state
})
const mapDispatchToProps = (dispatch)=>({
      actions: bindActionCreators(actionLib)
})
export default connect(mapStateToProps,mapDispatchToProps)(Books)