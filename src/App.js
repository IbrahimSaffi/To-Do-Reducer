import { useReducer } from "react";
import CardComponent from "./components/CardComponent.jsx"
import "./index.css"
function reducer(state,action){
  let tempArr = state["tasks"].slice()
  let tempFilter = state["filterType"]
  let tempTheme = state["theme"]
  let tempItem = state["itemToBePlaced"]
  let tempLoc = state["locToBePlaced"]
      if(action.type==="completed"){
        if(!state["tasks"][action.payload].isComplete){
          state["tasks"][action.payload].isComplete=true  
        }  
        else{
          state["tasks"][action.payload].isComplete=false
        }  
      }
     if(action.type==="addTask") {
        tempArr.push({value :action.payload,isComplete:false})
      }
      if(action.type==="filter"){
        tempFilter = action.payload
      }
      if(action.type==="clear-completed"){
        for(let i= 0;i<tempArr.length;i++){
          if(tempArr[i].isComplete){
            tempArr.splice(i,1)
            i--
          }
        }
      }
      if(action.type ==="toggle-theme"){
        state["theme"]==="dark"?tempTheme="light":tempTheme="dark"
      }
      if(action.type ==="del-task"){
        tempArr.splice(action.payload,1)
      }
      if(action.type ==="dragStart"){
         tempItem = action.payload
         console.log(action.payload,"start")
      }
      if(action.type ==="dragOver"){
        console.log(action.payload,"over")
         tempLoc = action.payload
      }
      if(action.type==="drop"){
        console.log("here")
        let item= tempArr.splice(state.itemToBePlaced,1)
        console.log(item)
       tempArr.splice(state.locToBePlaced,0,item[0])
       console.log(tempArr)
       tempLoc = null
       tempItem = null
      }
      return {tasks:tempArr, filterType:tempFilter,theme:tempTheme,itemToBePlaced:tempItem,locToBePlaced:tempLoc}
    }
    function App(){
  let [state,dispatch] = useReducer(reducer,{ tasks: [],filterType:"all",theme:"dark",itemToBePlaced:null,locToBePlaced:null})
  return (
    <div className ={`${state.theme} app`}>

    <div className="main-container">
      <div className="back-pic" ></div>
      <div onClick={()=>dispatch({type:"toggle-theme"})} className="header" >
        <h1>TODO</h1>
        <div className="icon"></div>
      </div>
      <div className="input-btn" >
        <div className="btn-wrapper">
        <button className="round-btn" ></button>

        </div>
      <input onKeyDown={(e)=>{
        if(e.key==="Enter"){
          if(e.target.value.length>0){
            dispatch({type:"addTask", payload:e.target.value})
            e.target.value=""
          }
        }
      }} type="text" placeholder="Create a new todo..." />

      </div>
          <CardComponent state = {state} dispatch={dispatch}/>
          <p className="drag">
            Drag and drop to reorder list
          </p>
    </div>
          </div>
  )
}

export default App;
