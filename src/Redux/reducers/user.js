
const initialState = {
     login:false
}

let   user =(state=initialState, action)=>{
      console.log("User=======***======",action);
      
          switch(action.type){
            case "LOGIN_USER":
                  return Object.assign({},state,action)
            case "USER_LOGIN_SUCCESS":
                  return Object.assign({},state,action.data)       
            default:
                  return state
      }

}

export default user
