import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
    return (
      <div className="Todo-List">
        <ul>
          {props.todos.map( todo =>
            <TodoItem
              key={todo.id}
              handleRemove={props.handleRemove}
              handleToggle={props.handleToggle}
              {...todo}
            />
          )}
        </ul>
      </div>
    )
}
