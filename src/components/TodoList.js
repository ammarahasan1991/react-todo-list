import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(item =>
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        deleteTodoHandler={this.props.deleteTodoHandler}
                    />
                )}
            </ul>
        );
    }
}

export default TodoList;