import { useState } from 'react';
import Icon from '../UI/Icon';

function SingleTodo({ title }) {
  const [isDone, setIsDone] = useState(false);

  // fa-check-circle => done todo
  // item line-through => done todo

  // item => ne done todo
  // fa-circle-thin => ne done todo

  // kai paspaudziu ant rutuliuko ikoneles iskonsolinu "paspaudei"
  // kai paspaudziu ant rutuliuko ikoneles pakeiciu isDone statusa i priesinga

  function clickHandler() {
    console.log('Paspaudei');
  }

  return (
    <li className={isDone === true ? 'item line-through' : 'item'}>
      <Icon onClick={clickHandler} icon={isDone === true ? 'fa-check-circle' : 'fa-circle-thin'} />
      {/* <i onClick={clickHandler} className={`fa fa-home`} aria-hidden='true'></i> */}
      <span className='text'>{title}</span>
      <Icon icon='fa-pencil' />
      <Icon icon='fa-trash' />
    </li>
  );
}

export default SingleTodo;
