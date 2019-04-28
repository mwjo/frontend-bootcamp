import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    const { label, completed } = this.props;

    //key={id} id={id} {...todos[id]}

    return (
      <li className="todo">
        <label>
          <input checked={completed} type="checkbox" /> {label}
        </label>
      </li>
    );
  }
}
