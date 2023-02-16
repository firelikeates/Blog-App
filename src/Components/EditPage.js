import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddBlogAction, editaction } from '../Actions/BlogActions'
import "../CSS/Add.css"
import Store from '../Store/Store'

const EditPage = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    let title1=""
    let desc1 = ""
    for(let i of props.blog){
        if(i.id===id){
            title1=i.title
            desc1=i.description
        }
    }
    useEffect(()=>{
        setTitle(title1)
        setDesc(desc1)
    },[])
    const onchnagefunctitle = (e) => {
        setTitle(e.target.value)
    }
    const onchnagefuncdesc = (e) => {
        setDesc(e.target.value)
    }
    const onFormSubmit = e => {
        e.preventDefault();
        if (title !== "" && desc !== "") {
            Store.dispatch(editaction({ title: title, description: desc, id: id }))
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
                        <input onChange={onchnagefunctitle} value={title} type="text" id='inp1_1' name="txtItem1" placeholder='title' className='add-title' />
                        <div style={{ fontWeight: "700", fontSize: "larger", marginTop: "2px", width: "100%", textAlign: "left" }} id='inp1' className="error-add"></div>
                        <label htmlFor="description">Description</label>
                        <input onChange={onchnagefuncdesc} value={desc} id='inp2_2' type="text" name="txtItem2" placeholder='description' className='add-description' />
                        <div id='inp2' style={{ fontWeight: "700", fontSize: "larger", marginTop: "2px", width: "100%", textAlign: "left" }} className="error-add"></div>
                        <button className='addbtn'>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const MapStateToProps = (state) => {
    return {
        blog:state.blog
    }
}
export default connect(MapStateToProps)(EditPage)