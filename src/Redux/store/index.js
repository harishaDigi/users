import { createStore,applyMiddleware,compose } from 'redux'
import reducers from '../reducers/'
import createHistory from "history/createBrowserHistory"
import { routerMiddleware, connectRouter } from "react-router-redux";
import thunk from "redux-thunk"

export const history = createHistory()

const middleware = [thunk,routerMiddleware(history)]
const enhancers=[]
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)
let store = createStore(reducers,composedEnhancers)

export default store