import React from 'react'
import { connect } from 'react-redux'
import "../CSS/Blog.css"
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
    return (
        <div className='container-bloglist'>
            <div className="linearbloglist">
                <h3 className='blogsh3'>Blog List</h3>
                <div className="blogs-grid">
                    {props.blogs.map((item, index) => {
                        return <BlogListItem key={index} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
const MapStateToProps = (state) => {
    return {
        blogs: state.blog
    }
}
export default connect(MapStateToProps)(BlogList)
