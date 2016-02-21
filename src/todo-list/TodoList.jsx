import React from "react";

export class TodoList extends React.Component {
    render() {

        return (
            <div className="todo-list col-sm-6">
                <ul>
                    { this.props.todoList.map(todo => <li key={ todo }>{ todo }</li>) }
                </ul>
            </div>
        );
    }
}