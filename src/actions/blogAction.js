import { ADD_BLOG, GET_BLOGS } from "./types"
import axios from "axios";
export const addBlog = (blog)  => async (dispatch) => {
    try {        
        const res = await axios.post('http://localhost:3001/api/blogs', blog);
        if (res.status === 200)
        {
          dispatch({
            type: ADD_BLOG,
            payload: res.data.data,
          });
          return Promise.resolve(res.data.data);
        }
      } catch (err) {
        return Promise.reject(err);
      }
}

export const retrieveBlogs = () => async (dispatch) => {
  try {        
      const res = await axios.get('http://localhost:3001/api/blogs');
      console.log('res: ', res);
      if (res.status === 200){
        dispatch({
          type: GET_BLOGS,
          payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
      }
    } catch (err) {
      return Promise.reject(err);
    }
}