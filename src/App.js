import { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import todos from "./components/todos";

class App extends Component {

    constructor() {
        super();

        this.state = {
            todos: todos
        }
    }

    deleteTodoHandler = (id) => {
        console.log("delete Item", id);
        let newArray = this.state.todos.filter(item => item.id !== id);
        console.log(newArray);
        this.setState(
            { todos: newArray }
        )
    }

    render() {
        return (
            <div>
                <Header />
                <TodoList todos={this.state.todos} deleteTodoHandler={this.deleteTodoHandler} />
            </div>
        );
    }
}

export default App;