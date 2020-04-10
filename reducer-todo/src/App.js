import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import {todoList, reducer} from './reducers/reducer';
import './App.css';

function App() {
  const [state,dispatch]= useReducer(reducer,todoList);
  const [task,addTask]= useState('');
  
  return (
    <>
      <div className='sticky-wrap'>
      {state.map(each => 
        <div className='sticky-note' key={each.id} onClick={(e)=>dispatch({type: 'toggle complete'}, each.completed=!each.completed, e.target.classList.toggle('completed'))}>
           <p> Task : {each.item}</p> 

           {each.completed ?<> <p className='check'> Completed : Yes</p>  <i class="fa fa-check" aria-hidden="true"/> </> : <p className='check'> Completed : No </p>}
           
        </div>
      )}
     
      </div>
      <div className='form'>
        <form>
           <h1> Add new task </h1>
           <label> Task </label>
          <input type='text' onChange={(e)=> addTask(e.target.value)} />
          <i onClick={()=>dispatch({type: 'Add task', payload: task})} className="fas fa-plus-circle"> </i>
          <br></br>
          <h1> Search Tasks</h1>
          <label> Search Tasks</label>
          <input  type='text' onChange={(e)=> addTask(e.target.value)} />
          <i onClick={()=>dispatch({type: 'Add task', payload: task})} className="fas fa-search"> </i>
          
        </form>
      </div>
    </>
      
  )}

export default App;
