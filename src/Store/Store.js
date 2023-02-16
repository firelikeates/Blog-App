import {applyMiddleware, combineReducers,createStore} from "redux"
import { authreducer } from "../Reducers/AuthReducer"
import { blogReducer } from "../Reducers/BlogReducer"
import thunk from "redux-thunk"
const Store =createStore(
    combineReducers({
        auth:authreducer,
        blog:blogReducer
    }),
    applyMiddleware(thunk)
)
export default Store