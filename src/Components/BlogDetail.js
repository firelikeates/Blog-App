import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../CSS/Blog.css"
import BlogListItem from './BlogListItem'

const BlogDetail = (props) => {
    const {id} = useParams()
    let title=""
    let desc = ""
    let dateAdded=""
    for(let i of props.blogs){
        if(i.id===id){
            title+=i.title;
            desc=i.description
            dateAdded=String(i.dateAdded)
        }
    }
    const closedetail = ()=>{
        props.history.push("/Blogs")
    }
    return (
        <div className='container-bloglist-detail'>
            <div className="linearbloglist-detail">
                <div className="blogs-grid-detail">
                {props.blogs.map((item, index) => {
                        return <BlogListItem key={index} item={item} />
                    })}
                </div>
                <div className="detail-container">
                        <button onClick={closedetail}><i className="fa fa-times"></i></button>
                        <h3><strong>Title:</strong> {title}</h3>
                        <h3><strong>Description:</strong> {desc}</h3>
                        <h3><strong>Date Added:</strong> {dateAdded}</h3>
                        <h3><strong>ID: </strong>{id}</h3>
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
export default connect(MapStateToProps)(BlogDetail)
