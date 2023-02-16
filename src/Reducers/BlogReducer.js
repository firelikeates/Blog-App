const initalblogstate = []

export const blogReducer = (state=initalblogstate,action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return[
                ...state,
                action.blog
            ]
        case "SET_BLOGS":
            return action.blog
        case "DELETE_BLOG":
            return state.filter(({id})=>{
                return id!==action.id
            })
        case "EDİT":
            return state.map(blogs=>{
                if(blogs.id===action.blog.id){
                    return {
                        ...blogs,
                        ...action.blog
                    }
                }else{
                    return blogs
                }
            })
        default:
            return state
    }
}