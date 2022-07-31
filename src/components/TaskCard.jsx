
export default function TaskCard(props) {
  return (
      <div
       style={
         {
          display:`${props.state.itemToBePlaced===props.index?"none":"flex"}`,
        filter:`${props.state.locToBePlaced===props.index?"brightness(50%)":"brightness(100%)"}`
        }
        // props.state.locToBePlaced===props.index?{marginBottom:"10px"}:{marginBottom:"0px"} , 
        // props.state.itemToBePlaced===props.index?{position:"absolute"}:{position:"relative"}
      } 
      onDrag={()=>{
        console.log("rag")
        props.dispatch({type:"dragStart",payload:props.index})
      }}
       onDragOver={(e)=>{
        console.log("over")
        e.stopPropagation();
        e.preventDefault()
        props.dispatch({type:"dragOver",payload:props.index})
      }} 
       onDrop={()=>{
        console.log("drop")
        props.dispatch({type:"drop"})
       }}
      className={`task-card ${props.task.isComplete?"completed":""}`} key={props.index}  >
           <div className="btn-wrapper">
           <button className={`round-btn`} onClick={()=>props.dispatch({type:"completed",payload:props.index})} >
            </button>

           </div>
          <p>
             {props.task.value}
          </p>  
          <p className="del" onClick={()=> props.dispatch({type:"del-task",payload:props.index})} >
          ✕
          </p>
          </div>
  )
}