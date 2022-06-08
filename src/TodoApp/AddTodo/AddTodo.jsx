import { useState } from 'react';
import Icon from '../UI/Icon';

function AddTodo(props) {
  // AddTodo sukurti state
  const [newTodoInput, setNewTodoInput] = useState('');
  // AddTodo susieti state su input
  // kai AddTodo kvieciam HandleAddTodo argumentu pagal input reiksme (isState)
  return (
    <div className='add-item'>
      <Icon onClick={props.onAddTodo} icon='fa-plus-circle' />
      <input type='text' placeholder='Add todo' onChange={(event) => setNewTodoInput(event.target.value)} value={newTodoInput} />
      <h2>{newTodoInput}</h2>
    </div>
  );
}

export default AddTodo;
