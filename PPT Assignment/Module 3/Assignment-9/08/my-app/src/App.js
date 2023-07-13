import './App.css';
import React from 'react';

export default function App() {
  const [todo, setTodo] = React.useState({
    inputValue: ''
  });
  const [todos, setTodos] = React.useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      inputValue: value
    }));
  }

  function handleSubmit(event) {
    if (todo.inputValue.length > 0) {
      event.preventDefault();
      const newTodo = {
        id: todos.length + 1,
        inputValue: todo.inputValue
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setTodo(prevTodo => ({
        ...prevTodo,
        inputValue: ''
      }));
    } 
    event.preventDefault();
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit} className='form-container'>
        <input
          name='todoTitle'
          type='text'
          placeholder='Enter Todo'
          value={todo.inputValue}
          onChange={handleChange}
          className='input-box'
        />
        <button type='submit' className='add-btn'>Add</button>
      </form>
      <div className='todos-container'>
        {todos.map(todo => (
          <div className='todo-container' key={todo.id}>
            <h3 className='todo-title'>{`${todo.id}. ${todo.inputValue}`}</h3>
            <p className='todo-title'>Status: Pending</p>
            <div className='btn-container'>
              <button className='update-btn'>Update Status</button>
              <button className='remove-btn'>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
