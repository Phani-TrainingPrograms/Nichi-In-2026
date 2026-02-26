import React, { Component } from 'react'

export default class StatefulTodoApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            newTodo : ""
        }
    }
    //handle the new Task:
    handleAdd =()=>{
        //get the current state
        const { todos, newTodo } = this.state
        if(newTodo == "") return;
        //create a new task
        const task = {
            id : Date.now(),
            text : newTodo, 
            done : false
        }
        //add the new Task to the collection and set it as new state. 
        this.setState({
            todos : [...todos, task],
            newTodo : ""
        })
    }

    handleToggle = (id) =>{
        this.setState((prevState)=>({
            todos : prevState.todos.map((td)=> td.id == id ? { ...todos, done : !td.done} : td
        )}
        ))
    }

    handleDelete = (id)=>{
        this.setState((prevState) =>({
            todos : prevState.todos.filter((td) => td.id !== id)
        }))
    }

  render() {
    return (
        <>
        <h1>Todo Manager</h1>
        <div>
            <input type='text' placeholder='Enter the Task' className='form-control'/>
            <button className='btn btn-primary'>
                <i class="fa fa-plus" aria-hidden="true"></i>
                Add
            </button> 
        </div>
        <div>
            <ul>

            </ul>
        </div>
      </>
    )
  }
}
