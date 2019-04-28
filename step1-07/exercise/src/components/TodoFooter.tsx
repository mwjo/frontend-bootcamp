import React from 'react';
import { Todos } from '../TodoApp.types';

interface TodoFooterProps {
  clear: any;
  todos: any;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const _onClick = () => {
    props.clear();
  };

  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  return (
    <footer>
      <span>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </span>
      <button onClick={_onClick} className="submit">
        Clear Completed
      </button>
    </footer>
  );
};
