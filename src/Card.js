import react from "react";
import React, { useState } from 'react';

export default function Card(props) {
  const [data,setdata] =useState(null)

  let getData = (val)=>{
    
    setdata(val.target.value)
    console.warn(val.target.value)
  }

 

  return (
    <div>
      <div className="card" >
        <div className="card-body">
          <h3 className="card-title">Add to TODO'S</h3>
          <p className="card-text">Here set the remainder for events to be done</p>
         <input type="text" placeholder="Enter here.." onChange={getData} ></input><br /><br />
            {
               <button type="submit" onClick={()=>{props.addEvent(data)}}  className="btn btn-primary">Add to TODO list</button>
            }
      
       
        </div>
      </div>
    </div>
  );
}