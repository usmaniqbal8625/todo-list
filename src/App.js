import './App.css';
import { useState } from 'react';



const App=()=> {
  const [items,setItems]=useState("");
  const [task,setTask]=useState([]);
  const changItems =(event)=>{
setItems(event.target.value);
};
  const AddTasks=()=>{
setTask((taske)=>{
  return[...taske,items];
});
setItems("");
  };
  const ItemsDelete = (index) => {
    setTask((taske) => {
      const newTask = [...taske];
      newTask.splice(index, 1);
      return newTask;
    });
  };

   return( 
  <div className= "container">
   <div className="center_div">
     <h1>Todo_List</h1>
     <input type='text'  placeholder='Enter Task' onChange={changItems} value={items}/>
     &nbsp;
     <button onClick={AddTasks}> + </button>
    <ol>
     {task.map((tasks,index)=>{
  return<li key={index}>{tasks} &nbsp;
  <button onClick={ItemsDelete}>-</button></li>
})
}    </ol>
  </div>
    </div> 
     
    

)
};

export default App;