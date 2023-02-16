import  database  from "../firebase/FirebaseConfig"
import Store from "../Store/Store"

export const AddBlogAction = (blog)=>({
    type:"ADD_BLOG",
    blog:blog
})
export const deleteaction = (id)=>({
    type:"DELETE_BLOG",
    id:id
})
export const addblogtodatabase = (blog)=>{
    database.ref("Items").push(blog).then(res=>{
        Store.dispatch(AddBlogAction({
            id:res.path.pieces_[res.path.pieces_.length-1],
            ...blog
        }))
    })
}
export const editaction = (blog)=>({
    type:"EDİT",
    blog:blog
})
export const setBlogs = (blog)=>({
    type:"SET_BLOGS",
    blog:blog
})