import { ADDTASK, HANDLEDELETE, HANDLEDONE, HANDLEEDIT } from "./TypeActions"

const initialState={
    tasks:[
    
        {text:"9oum",id:Math.random(),done:false},
        {text:"or9ed",id:Math.random(),done:false}
    ]

    
}
const Reducer=(state=initialState,action)=>{
    switch (action.type) {
       
        case ADDTASK : return {...state,tasks:[...state.tasks,{text:action.payload,id:Math.random(),done:false}]}
        case HANDLEDONE : return {...state, tasks : state.tasks.map(el => el.id == action.payload ? {...el,done : !el.done} : el) }
        case HANDLEDELETE : return {...state, tasks : state.tasks.filter(el=> el.id != action.payload)}
        case HANDLEEDIT : return {...state,tasks : state.tasks.map(el=> el.id == action.payload.id ? {...el,text : action.payload.text} : el)}
        default:return state
           
    }
}
export default Reducer