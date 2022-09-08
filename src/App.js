import React from 'react';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { createStore, applyMiddleware } from "redux"
import BlogList from './components/BlogList';
import thunk from "redux-thunk";
let store = createStore(allReducers, applyMiddleware(thunk))


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Blogs(with the help of Redux)</h1>
        <BlogList />        
      </div>
    </Provider>
  );
}

export default App;
