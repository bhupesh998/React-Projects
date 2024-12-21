import React from 'react'
import Todo from '../models/todo.ts'
import TodoComponent from './Todo.tsx'


//props is an object with an items key that holds an array of strings = (props: { items: string[]})
// but props also has a children property along with key value pairs, we don't know type of children 
// defining props like this fpr every component in project will become cumbersome so react has a solution
// we can use such a generic type or a functional component can be turnned into a generic function


//React.FC is a type defined by types/react package, we can just import react and rest will be done behind the scenes
// by using React.FC typescript understands that this is a function that have props object with will always have a children property
// this is a generic type and we can merge our own type definition for it as props object so that the props that we will send will be included

// using angular bracket here is diffrent , React.FC is already a genric type , we are plugging in a concrete value for that internally used genric type
// before that type T defined by react.FC type, here we are defining as function and we want to let Typescript know how this funcvtion should be treated internally
// that the function should get props defined by us and merge them with base props like children
const Todos: React.FC<{items: Todo[] }> = (props) => {
  return <ul>
    {props.items.map(item=> <TodoComponent key={item.id} text={item.text} />)}
    
  </ul>
}

export default Todos