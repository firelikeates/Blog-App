import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { deleteaction } from '../Actions/BlogActions'
import Store from "../Store/Store"

const BlogListItem = (props) => {
  const deletefunc = e => {
    e.preventDefault();
    Store.dispatch(deleteaction(props.item.id))
  }
  return (
    <div className='grid-items'>
      <div>Title: {props.item.title}</div>
      <div className="links">
        <Link onClick={deletefunc} className='delete-link'>Delete</Link>
        <Link to={"/Edit/"+props.item.id} className="edit-link">Edit</Link>
        <Link className='detail-link' to={"/Blogs/" + props.item.id}>Details</Link>
      </div>

    </div>
  )
}

export default BlogListItem
