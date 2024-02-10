
import "./App.css";
import {useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      setTask([
        ...task,
        { id: new Date().getTime(Date.now()), taskName: e.target.value,done:false },
      ]);
      e.target.value = "";
    }
  }

  const updateTasks = (type,id)=>{
    if(type==='delete'){
      let filterTask = task.filter(item=> item.id !==id)
      setTask(filterTask)
    }else if(type ==='checked'){
      let updateTask= task.map((item)=>
      item.id===id ? {...item , done : !item.done} : item
     )
     setTask(updateTask)
    }
  }


  return (
    <div className="App">
      <div className="input">
        <h1>TODO list</h1>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter task"
            onKeyUp={(e) => handleSubmit(e)}
          />
        </div>
      </div>
      <div className="outputDiv">
        {task.length > 0 &&
          task.map(({ taskName, id,done}) => {
            return (
              <div className="output" key={id}>
                <span className={done ? 'completed' : ''}><i className="bi bi-arrow-right-circle"></i> {taskName}</span>
                <div className="option">
                  <span className="done" onClick ={e=>updateTasks("checked",id)}>
                    <i className="bi bi-check-square"></i>
                  </span>
                  <span className="delete" onClick={e=>updateTasks("delete",id)}>
                    <i className="bi bi-trash-fill"></i>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
