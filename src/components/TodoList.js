import React from 'react';

const TodoList = (props) => {
  return (
    <div
      className='list'
      style={{
        textDecoration: props.list.complete ? 'line-through' : '',
      }}
    >
      <div>{props.list.task}</div>

      <div>
        <button
          className='btn btn-primary'
          onClick={() => props.toggleComplete(props.list.id)}
        >
          Complete
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => props.handleDelete(props.list.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoList;
