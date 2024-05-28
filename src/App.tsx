import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber:1, rowDescription:'Feed Puppy', rowAssigned:'User One'}, 
    {rowNumber:2, rowDescription:'Water Plnts', rowAssigned:'User two'}, 
    {rowNumber:3, rowDescription:'Make Dinner', rowAssigned:'User One'},
    {rowNumber:4, rowDescription:'Charge Phone', rowAssigned:'User two'}
  ]);

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filteredTodo = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });  
    setTodos(filteredTodo);
  }

  const addTodo = (description: string, assigned: string) => {
    console.log('Add todo button has been clicked !');
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }    

    const newTodo = {
      rowNumber:rowNumber, 
      rowDescription:description, 
      rowAssigned:assigned
    };
    setTodos(todos => [...todos, newTodo]);
    console.log(todos);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>

        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary' >
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          
          {showAddTodoForm && <NewTodoForm addTodo = {addTodo}/>}
          
        </div>
      </div>
    </div>
  );
}

