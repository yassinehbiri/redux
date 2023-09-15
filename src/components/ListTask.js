import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTask=()=>{
    const tasks=useSelector(state=>state.tasks)
    const [chigui,setChigui] = useState("All")
    return(
        <div>
           <button onClick={()=> setChigui("All")} >All</button> 
           <button onClick={()=> setChigui("Done")}>Done</button>
           <button onClick={()=> setChigui("NotDone")}>NotDone</button>
        {/* {
            tasks.map(el=> <CardTask el={el}/>)
        } */}

        {
            chigui == "All" ?
            tasks.map(el=> <CardTask el={el}/>)
            :
            chigui == "Done" ? 
            tasks.filter(el=>el.done == true).map(el=> <CardTask el={el}/>)
            :
            tasks.filter(el=>el.done == false).map(el=> <CardTask el={el}/>)
        }
        </div>
    )
}
export default ListTask