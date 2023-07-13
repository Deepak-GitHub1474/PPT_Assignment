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
        inputValue: todo.inputValue,
        status: 'pending'
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setTodo(prevTodo => ({
        ...prevTodo,
        inputValue: ''
      }));
    }
    event.preventDefault();
  }

  function handleUpdateStatus(todoId) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            status: todo.status === 'pending' ? 'completed' : 'pending'
          };
        }
        return todo;
      })
    );
  }

  function handleRemove(todoId) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
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
            <p className='todo-title'>Status: {todo.status}</p>
            <div className='btn-container'>
              <button className='update-btn' onClick={() => handleUpdateStatus(todo.id)}>Update Status</button>

              <button className='remove-btn' onClick={() => handleRemove(todo.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
