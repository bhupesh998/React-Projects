import React, { useState} from 'react';
import Todos from './components/Todos.tsx';
import Todo from './models/todo.ts';
import NewTodo from './components/NewTodo.tsx';

function App() {

  const [todos , setTodods] = useState<Todo[]>([])
  

  const addToDoHandler = (todoText: string)=>{

  }

  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler}/>
     <Todos items={todos}/>
    </div>
  );
}

export default App;
