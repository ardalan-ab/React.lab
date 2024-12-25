import React from "react";
import { useRef, useState } from "react";


import "./components/App.css"
const ToDoList = [
  {
  
    title: "running",
    isDone:true
  },
];
function App() {

    const[lists,setlists]=useState(ToDoList)
    const inputRef = useRef();
      const handleAdd=function(){
        const todoitem={ title:inputRef.current.value ,isDone:false}
        ToDoList.push(todoitem)
        setlists([...ToDoList])
       
        

      }
    
    
  return (
    <>
     <input type="text" ref={inputRef} />
          <button onClick={handleAdd} >add</button>
      <ul>
        {
          lists.map((item ,index)=>{
            return ( <><li key={index} className={item.isDone? "done":"notdone"}>{item.title}</li>

  

                </>
            )
          })
        }
      </ul>
    </>
  );
  
}

export default App;
