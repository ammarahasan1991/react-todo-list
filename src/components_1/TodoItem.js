import { Component } from "react";

class TodoItem extends Component {
    render() {
        return (
            <li>
                <input type="checkbox"
                    id={this.props.id}
                    defaultChecked={this.props.completed}
                    onChange={() => this.props.markComplete(this.props.id)} />
                <label htmlFor={this.props.id}
                    style={{ textDecoration: this.props.completed ? 'line-through' : '' }}>
                    {this.props.title}
                </label>
                <button onClick={() => this.props.delTodo(this.props.id)}>x</button>
            </li >
        );
    }
}

export default TodoItem;