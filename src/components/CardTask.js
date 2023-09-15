import { useDispatch } from "react-redux"
import { handleDelete, handleDone, handleEdit } from "../Redux/Actions"
import { useState } from "react"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    const [edit,setEdit] = useState(false)
    const [text,setText] = useState(el.text)

    const hEdit=()=>{
        dispatch(handleEdit({id : el.id,text}))
        setEdit(!edit)
    }
    return(
        <div>
           {
            edit ? <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/> : <h2 className={el.done && "alaya"}>{el.text}</h2>
           } 
            <h3>{el.done ? "TRUE" : "FALSE"}</h3> 
            <button onClick={()=> dispatch(handleDelete(el.id))}>Delete</button>
            <button onClick={()=> dispatch(handleDone(el.id))}> Done</button>
           {/* {
            edit ? <button onClick={hEdit}>Valider</button> : <button onClick={()=>setEdit(!edit)}>Edit</button>
           } */}

            <button onClick={()=> edit ? hEdit() : setEdit(!edit)}>{edit ? "Valider" : "Edit"}</button> 
            



        </div>
    )
}
export default CardTask