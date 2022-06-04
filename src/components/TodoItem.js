import { Component } from "react";

class TodoItem extends Component {
    render() {
        return (
            <li className={`todo-item ${this.props.completed ? 'completed' : 'uncompleted'}`} >
                <input
                    type="checkbox"
                    id={this.props.id}
                    defaultChecked={this.props.completed}
                    onChange={(e) => {
                        this.props.changeTodoState(this.props.id);
                    }}
                />
                <label htmlFor={this.props.id} className="todo-label">{this.props.title}</label>

                <button className="edit" onClick={() => {
                    this.props.showEditFancy(this.props.id)
                }}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button onClick={() => { this.props.deleteTodo(this.props.id); }} className="delete">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li >
        );
    }
}

export default TodoItem;