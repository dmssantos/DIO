import React from 'react';
import { connect } from 'react-redux';

const List = ({ todos }) => (
  <ul>
    {todos.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todo.list
});

export default connect(mapStateToProps)(List);