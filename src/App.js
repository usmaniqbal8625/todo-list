import './App.css';
// import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from 'react';
// import Navbar from './components/Navbar';

// import Tables from './components/Tables';
// import Navbar from './components/Navbar';
// import { Home } from './context/Home';
// import About from './context/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import NoteState from './context/noteState';



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
//     <NoteState>
//    <BrowserRouter>
   
//   <Routes>
// <Route path="/" element={<Home/>} />
// {/* <Route path="/tables" element={<Home/>} /> */}

// <Route path="/about" element={<About/>} />



  // </Routes>
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
     
    // </BrowserRouter>
    // </NoteState>
// 
/* <NoteState>  
<Router>
<Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch></Router>

</NoteState> */
    

)
};

export default App;