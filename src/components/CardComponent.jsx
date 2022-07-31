
import Filter from "./Filter"
import TaskCard from "./TaskCard"
function CardComponent(props){
    function filteredList(filterType){
        return props.state.tasks.filter(ele=>{
          if(filterType ==="active"){
             return ele.isComplete ===false
          }
          else if(filterType ==="completed"){
           return ele.isComplete ===true
          }
          else{
            return ele
          }
        })
       }
       
     return (
      <div className="outer-task-container">
        <div className="tasks-container">
           {filteredList(props.state.filterType).length===0?
          <h1 className="empty">No Tasks</h1>:filteredList(props.state.filterType).map((ele,i)=>{
               return <TaskCard index ={i} dispatch={props.dispatch} task = {ele} state = {props.state} />
   
           })}
      </div>
     <Filter completedItems = {filteredList("active").length} state={props.state} dispatch ={props.dispatch} />
     </div>
     )
}
export default CardComponent