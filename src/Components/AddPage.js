import React from 'react'
import { connect } from 'react-redux'
import { AddBlogAction, addblogtodatabase } from '../Actions/BlogActions'
import "../CSS/Add.css"
import Store from '../Store/Store'
import { v4 as uuid } from "uuid"
import database  from '../firebase/FirebaseConfig'

const AddPage = (props) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    const title = e.target.elements.txtItem1.value;
    const desc = e.target.elements.txtItem2.value;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    if (title !== "" && desc !== "" && props.blogs.length<=6) {
      console.log(Store.getState().auth)
      let blog = { title: title, description: desc, dateAdded: formattedToday,uid:Store.getState().auth.uid}
      addblogtodatabase(blog)
      props.history.push("/Blogs")
    } else {
      if (title === "") {
        const title_element = document.querySelector("#inp1_1")
        const div = title_element.nextElementSibling
        div.innerHTML = "Title is required!"
      } else {
        const title_element = document.querySelector("#inp1_1")
        const div = title_element.nextElementSibling
        div.innerHTML = ""
      }
      if (desc === "") {
        const desc_element = document.querySelector("#inp2_2");
        const div_2 = desc_element.nextElementSibling;
        div_2.innerHTML = "Description is required!"
      } else {
        const desc_element = document.querySelector("#inp2_2");
        const div_2 = desc_element.nextElementSibling;
        div_2.innerHTML = ""
      }
    }
  }
  return (
    <div className='container-addpage'>
      <div className="forlineear">
        <h2 className="add">Add Blog</h2>
        <div className="form-group">
          <form onSubmit={onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input maxLength={"15"} type="text" id='inp1_1' name="txtItem1" placeholder='title' className='add-title' />
            <div style={{ fontWeight: "700", fontSize: "larger", marginTop: "2px", width: "100%", textAlign: "left" }} id='inp1' className="error-add"></div>
            <label htmlFor="description">Description</label>
            <textarea maxLength={"128"} id='inp2_2' type="text" name="txtItem2" placeholder='description' className='add-description' />
            <div id='inp2' style={{ fontWeight: "700", fontSize: "larger", marginTop: "2px", width: "100%", textAlign: "left" }} className="error-add"></div>
            <button className='addbtn'>Add Blog</button>
          </form>
        </div>
      </div>
    </div>
  )
}
const MapStateToProps = (state)=>{
  return{
    blogs:state.blog
  }
}

export default connect(MapStateToProps)(AddPage)
