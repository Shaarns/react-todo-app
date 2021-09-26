import React from 'react';
import './styles.css';

const TodoInput = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    props.addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='tast' className='heading'>
          Add Task
        </label>
        <br />
        <input
          name='task'
          placeholder='Add Task'
          type='text'
          value={value}
          onChange={handleChange}
          className='input'
          autoComplete='off'
        />
      </form>
    </div>
  );
};

export default TodoInput;
