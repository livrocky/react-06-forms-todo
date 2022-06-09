import SingleTodo from '../SingleTodo/SingleTodo';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

function TodoList(props) {
  return (
    <section className='content'>
      <ul id='list' className='list'>
        {props.todos.map((tObj) => (
          <SingleTodo key={tObj.id} {...tObj} onDelete={props.onDelete} onToggle={props.onToggle} />
        ))}
      </ul>
      <AddTodo onAddTodo={props.onAddTodo} />
    </section>
  );
}

export default TodoList;
