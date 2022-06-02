import { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends Component {

    constructor(props) {
        super(props);
        console.log("constructor App");

        this.state = {
            todos: [
                {
                    id: 1,
                    title: "take out the trash",
                    completed: false
                },
                {
                    id: 2,
                    title: "Dinner with wife",
                    completed: true
                },
                {
                    id: 3,
                    title: "Meeting with Boss",
                    completed: false
                }
            ]
        }
    }

    deleteTodo = (id) => {
        const newArray = this.state.todos.filter(item => item.id !== id);
        this.setState({
            todos: newArray
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };
        const newArray = this.state.todos;
        newArray.push(newTodo);
        this.setState({
            todos: newArray
        })
    }

    render() {
        console.log("render App");
        const filtered = this.state.todos;
        return (
            <div>
                <Header />
                <Form
                    addTodo={this.addTodo}
                />
                <TodoList
                    todos={filtered}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default App;