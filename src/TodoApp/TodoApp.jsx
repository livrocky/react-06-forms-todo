import Header from './Header/Header';

function TodoApp() {
  return (
    <div className='container'>
      <Header />
      <section className='content'>
        <ul id='list' className='list'>
          <li className='item ' data-id='t_2'>
            <i className='fa fa-circle-thin make-done' aria-hidden='true'></i>
            <span className='text'>new todo</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
          <li className='item line-through' data-id='t_2'>
            <i className='fa fa-check-circle make-done' aria-hidden='true'></i>
            <span className='text'>done todo</span>
            <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
            <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
          </li>
        </ul>
        <div className='add-item'>
          <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
          <input type='text' id='input' placeholder='Add todo' />
        </div>
      </section>
    </div>
  );
}

export default TodoApp;
