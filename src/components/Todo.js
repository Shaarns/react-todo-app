import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './styles.css';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  // const [newArray, setNewArray] = React.useState([]);

  const addTodo = (task) => {
    setTodos([{ task, complete: false, id: Date.now() }, ...todos]);
    // setNewArray(todos.reverse());
  };
  //to sort list item alphebetically
  // const newArray = todos.sort((a, b) => (a.task > b.task ? 1 : -1));

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <div className='div'>
        <TodoInput addTodo={addTodo} />
        <div className='status'>
          <div>Tasks Left: {todos.filter((todo) => !todo.complete).length}</div>
          <div>completed : {todos.filter((todo) => todo.complete).length}</div>
        </div>
        <div>
          {todos.map((todo) => {
            return (
              <TodoList
                key={todo.id}
                list={todo}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
