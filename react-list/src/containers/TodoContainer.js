import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = text => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  return (
    <div className="todo-container">
      <h2>My Tasks</h2>
      <TodoForm addTodo={addTodo} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
};

export default TodoContainer;
