import React from 'react';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

import store from './redux/store';
import { addTodo } from './redux/todoActionCreators';

export class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    if (this.state.todoList.length === 0) {
      store.dispatch(addTodo('MyTask 1'));
      store.dispatch(addTodo('MyTask 2'));
      store.dispatch(addTodo('MyTask 3'));
      this.state = store.getState();
    }
  }

  onChange() {
    this.setState(store.getState());
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(::this.onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  newTodo(todo) {
    this.setState({ products: [...this.state.products, todo] });
    console.warn(this.state);
  }

  render() {
    return (
      <div className="app" className="row">
        <TodoForm newTodo={ (todo) => store.dispatch(addTodo(todo)) } />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}
