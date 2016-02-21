import React from "react";

export class TodoForm extends React.Component {
    static propTypes = {
        newTodo: React.PropTypes.func.isRequired,
    };

    handleChange({ target }) {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newTodo(this.state.todo);
        e.target.querySelectorAll('*[name="todo"]')[0].value = '';
    }

    render() {
        return (
            <form className="col-sm-6" onSubmit={ ::this.handleSubmit }>
                <div className="input-group">
                <input type="text" className="form-control" name="todo" placeholder="New task..." onChange={ ::this.handleChange } />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Add</button>
                </span>
                </div>
            </form>
        );
    }
}