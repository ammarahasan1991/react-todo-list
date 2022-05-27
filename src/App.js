import { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

class App extends Component {

    constructor() {
        super();

        this.state = {
            todos: [
                { id: 1, text: "learn react", completed: false },
                { id: 2, text: "learn JS", completed: true },
                { id: 3, text: "learn Nodejs", completed: false },
                { id: 4, text: "learn express", completed: true },
            ]
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