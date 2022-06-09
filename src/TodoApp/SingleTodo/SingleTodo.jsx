import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ id, title, isDone: isDoneProp, onDelete, onToggle, onEdit }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  function singleTodoEdit() {
    // jei isEditOn === false
    if (isEditOn === false) {
      // nustatom isEditOn => true
      setIsEditOn(true);
      return;
    }
    // nustatom isEditOn => true

    // jei isEditOn === true
    if (isEditOn === true) {
      // nustatom isEditOn => false
      setIsEditOn(false);
      onEdit(id, editedTitle);
    }
  }

  return (
    <li className={isDoneProp === true ? 'item line-through' : 'item'}>
      <Icon onClick={() => onToggle(id)} icon={isDoneProp === true ? 'fa-check-circle' : 'fa-circle-thin'} />
      {/* Rodom jei isEditOn yra false */}
      {isEditOn === false && <span className='text'>{title}</span>}
      {/* Rodom jei isEditOn yra true */}
      {isEditOn === true && <input type='text' onChange={(event) => setEditedTitle(event.target.value)} value={editedTitle} />}

      {isDoneProp === false && <Icon onClick={singleTodoEdit} icon='fa-pencil' />}
      <Icon onClick={() => onDelete(id)} icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
