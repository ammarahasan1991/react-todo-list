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
            ],
            filterOption: "all"
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

    changeTodoState = (id) => {
        const newArray = this.state.todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        });
        this.setState({
            todos: newArray
        })
    }

    changeFilterOption = (option) => {
        console.log(option);
        this.setState({
            filterOption: option
        })
    }

    render() {
        console.log("render App");
        let filtered = [];
        if (this.state.filterOption === "all") {
            filtered = this.state.todos;
        } else if (this.state.filterOption === "completed") {
            filtered = this.state.todos.filter(item => item.completed === true)
        } else {
            filtered = this.state.todos.filter(item => item.completed === false)
        }
        return (
            <div>
                <Header />
                <Form
                    addTodo={this.addTodo}
                    changeFilterOption={this.changeFilterOption}
                />
                <TodoList
                    todos={filtered}
                    deleteTodo={this.deleteTodo}
                    changeTodoState={this.changeTodoState}
                />
            </div>
        );
    }
}

export default App;