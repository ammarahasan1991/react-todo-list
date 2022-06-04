import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map(item => {
                    return <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        deleteTodo={this.props.deleteTodo}
                        changeTodoState={this.props.changeTodoState}
                        showEditFancy={this.props.showEditFancy}
                    />
                })}
            </ul>
        )
    }
}

export default TodoList;