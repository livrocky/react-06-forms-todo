import { useState } from 'react';

function HandleAddTodo({ onClick }) {
  //   const [todos, setTodos] = useState([]);

  return (
    <div className='add-item'>
      <i onClick={HandleAddTodo} id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
      <input type='text' id='input' placeholder='Add todo' />
    </div>
  );
}

export default HandleAddTodo;
