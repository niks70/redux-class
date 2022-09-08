import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addBlog, retrieveBlogs } from '../actions/blogAction'
const intitialState = {
    title: '',
    body: '',
    image: ''
}

class BlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
            blog: intitialState
        }
    }

    componentDidMount() {
        this.props.retrieveBlogs();
      }

    handleChange = e => {
        this.setState(prevState => ({
            blog: {
                ...prevState.blog,
                [e.target.name]: e.target.value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addBlog(this.state.blog)
        this.setState({blog: intitialState})
    }

  render() {
    const { blogs } = this.props.blogs;

    const {title, body, image} = this.state.blog
    return (
      <div>
        <h1>BlogList</h1>
        {blogs && blogs.map((blog, index) => (
            <div key={index}>
                <h6>{blog.title}</h6>
                <p>{blog.body}</p>
                <img src={blog.image} width={'20px'} height={'20px'} />
            </div>    
        ))}
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
                <label>
                    Title
                </label>
                <input type='text' name='title' value={title} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label>
                    Body
                </label>
                <textarea name='body' value={body} onChange={(e) => this.handleChange(e)}></textarea>
            </div>
            <div>
                <label>
                    Image Url
                </label>
                <input type='url' name='image' value={image} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <button type='submit'> submit</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    blogs: state.blogs
})

export default connect(mapStateToProps, { addBlog, retrieveBlogs })(BlogList);