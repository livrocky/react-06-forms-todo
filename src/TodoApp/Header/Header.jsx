import React, { useState, useRef } from 'react';

function Header() {
  const [mainTodoArray, setMainTodoArray] = useState([]);
  console.log('mainTodoArray===', mainTodoArray);
  return (
    <header>
      <div className='clear'>
        <i id='reset' className='fa fa-refresh'></i>
      </div>
      <div className='done-todo-count'>
        {mainTodoArray.filter((todo) => !todo).length} / {mainTodoArray.length}
      </div>
      {/* <h3 className='done-todo-count'>0 / 0</h3> */}
      <p id='date' className='date'>
        {new Date().toLocaleString()}
      </p>
      <img className='img-fluid cover-img' src='img/gold.jpg' alt='Cover' />
    </header>
  );
}

export default Header;
