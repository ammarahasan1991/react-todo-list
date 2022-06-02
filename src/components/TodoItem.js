import { Component } from "react";

class TodoItem extends Component {
    render() {
        console.log("render TodoItem");
        return (
            <li>
                <input
                    type="checkbox"
                    id={this.props.id}
                    defaultChecked={this.props.completed}
                    onChange={(e) => {
                        this.props.changeTodoState(this.props.id);
                    }}
                />
                <label htmlFor={this.props.id}>{this.props.title}</label>

                <button onClick={() => { this.props.deleteTodo(this.props.id); }}>x</button>
            </li>
        );
    }
}

export default TodoItem;