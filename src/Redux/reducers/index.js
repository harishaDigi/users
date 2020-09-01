import { combineReducers } from "redux"

import { routerReducer } from "react-router-redux"
import {history} from '../store'

import  user  from './user.js'
export default  combineReducers({user:user})