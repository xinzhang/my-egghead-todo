import React from 'react';

export const TodoItem = (props) => {
  const handleToggle = props.handleToggle.bind(null, props.id);
  const handleRemove = props.handleRemove.bind(null, props.id);

  return (
    <li>
      <span className="delete-item"><a href="#" onClick={handleRemove}> X </a></span>
      <input type="checkbox" onChange={handleToggle} checked={props.isCompleted} />
      {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
