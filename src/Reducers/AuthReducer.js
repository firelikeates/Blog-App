const initalauthstate = {}

export const authreducer = (state=initalauthstate,action)=>{
    switch(action.type){
        case "LOGİN":
            return{
                uid:action.uid
            }
        case "LOGOUT":
            return {}
        default:
            return state
    }
}