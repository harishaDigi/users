import { push } from "react-router-redux"
import * as types from '../constants'
const axios = require('axios')

export const  userLogin =(data)=>{
          console.log("entered in userLogin====>");
          
          return{
                    "type":"USER_LOGIN",
                    data
          }
}
export const userLoginSuccess = (data)=>({
          type :types.USER_LOGIN_SUCCESS,
          data
})
// export const userLoginFail = (data)=>({
//           type: types.USER_LOGIN_FAIL,
//           data
// })
export const loginRequest  = (data)=>{
          return async  dispatch =>{
                 let uname = data.userid
                 let password = data.password
                 let token = new Buffer(uname + ":" + password).toString("base64");
                 console.log("Token======",token)
                 let header = {
                           headers:{
                           "Content-Type" :'application/json'
                    }
                 }
                 let options = {
                           'username': data.userid,
                           'password':data.password
                    }
                    try{
                              let {data} = await axios.post("http://localhost:5000/v1/meta/login",options,header)
                              console.log("Response====",data)
                              if(data.success){
                                        localStorage.setItem('token',data.token)
                                        dispatch(userLoginSuccess({login:true}))
                                       // dispatch(push('/books'))
                              }
                              else{
                                       // dispacth()
                              }
                    }catch(err){
                              console.log("Error occured while login",err);
                    }

          }
}