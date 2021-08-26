import React from 'react';

const List = ({ todoList }) => (
  <ul>
    {todoList.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default List;