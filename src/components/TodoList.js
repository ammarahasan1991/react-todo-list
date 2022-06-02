import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    render() {
        console.log("render TodoList");
        return (
            <ul>
                {this.props.todos.map(item => {
                    return <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        deleteTodo={this.props.deleteTodo}
                        changeTodoState={this.props.changeTodoState}
                    />
                })}
            </ul>
        )
    }
}

export default TodoList;