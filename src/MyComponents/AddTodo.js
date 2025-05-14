import React from 'react';
import { useState } from 'react';
const AddTodo = ({addTodo}) => {
    const [title, setTitle]=useState("");
    const [Desc, setDesc]=useState("");
    
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !Desc){
        alert("Title or Description cannot be blank");
      }
      else{
        addTodo(title,Desc);
        setTitle("");
        setDesc("");
      }
    }
    let thisStyle={
      margin: "40px auto"
    }
  return (
    <div className="container" style={thisStyle}>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Desc" className="form-label">Todo Description</label>
          <input type="text" value={Desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="Desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
