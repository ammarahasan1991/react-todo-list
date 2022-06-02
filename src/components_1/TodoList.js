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
                        title={item.title}
                        completed={item.completed}
                        delTodo={this.props.delTodo}
                        markComplete={this.props.markComplete}
                    />
                )}
            </ul>
        );
    }
}

export default TodoList;