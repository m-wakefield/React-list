import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
  <li className="todo-item">
    <span
      onClick={() => toggleComplete(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
  </li>
);

export default TodoItem;
