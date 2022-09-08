import { ADD_BLOG, GET_BLOGS } from "../actions/types";

export default function(state = [], action) {
    switch(action.type) {
        case ADD_BLOG:
            debugger
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case GET_BLOGS:
            return {
                blogs: action.payload
            }
      default:
        return state;
    }
}