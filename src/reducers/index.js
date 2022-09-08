import { combineReducers } from "redux"
import blogReducer from "./blogReducer"

const allReducers = combineReducers({
  blogs: blogReducer,
})

export default allReducers