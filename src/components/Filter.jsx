function Filter(props) {
    return (<div className="task-card filter-card">
        <button className="item-num" >{props.completedItems===0?"No":props.completedItems} Items left</button>
        <div className="filter-types" >
            <button className={props.state.filterType==="all"?"active":""} onClick={() => props.dispatch({ type: "filter", payload: "all" })} > All</button>
            <button className={props.state.filterType==="active"?"active":""} onClick={() => props.dispatch({ type: "filter", payload: "active" })} >Active</button>
            <button className={props.state.filterType==="completed"?"active":""} onClick={() => props.dispatch({ type: "filter", payload: "completed" })}>Completed</button>
        </div>
        <button className="clr" onClick={()=>props.dispatch({type:"clear-completed"})} >
            Clear Completed
        </button>
    </div>)
}
export default Filter