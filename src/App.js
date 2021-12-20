import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React, { useState } from 'react';
import List from './List';

function App() {
  let delEvent = (indexes)=>{
  
    let removeItems = todoItems.filter((item,index) => index !== indexes)
   setTodo([...removeItems])
  }

  let addEvent = (data) =>{
  setTodo([...todoItems,data])
   }
const [todoItems,setTodo] = useState([])
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-lg-6 mt-5'>
         <div>
        <h3>MY TODO LIST</h3>  
           {
             todoItems.map((obj,index)=>{
               return (
                  <List datas={obj} indexes={index}delEvent={delEvent}></List>
               );
             })
           }
      
         </div> 
       
      </div>
      <div className='col-lg-6 mt-5'>
      <Card addEvent={addEvent}></Card>
        
      </div>
    </div>
  </div>
  );
}

export default App;
