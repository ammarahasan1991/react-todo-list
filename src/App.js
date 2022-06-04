import { Component } from 'react';
import './App.css'
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "تعلم البرمجة",
                    completed: false
                },
                {
                    id: 2,
                    title: "تناول الفطور",
                    completed: true
                },
                {
                    id: 3,
                    title: "استحم",
                    completed: false
                }
            ],
            filterOption: "all",
            editedTodoId: 0,
            editedTodoText: ""
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
        this.setState({
            filterOption: option
        })
    }

    showEditFancy = (id) => {
        document.getElementById('card-popup-container').style.cssText = "visibility: visible; opacity: 1;";
        let item = this.state.todos.filter((item) => item.id === id);
        document.getElementsByClassName("edit_tite")[0].innerHTML = item[0].title;
        this.setState({
            editedTodoId: id
        })
    }

    changeEditTodoText = (e) => {
        this.setState({
            editedTodoText: e.target.value
        })
    }

    editTodo = () => {
        let newArray = this.state.todos.map(item => {
            if (item.id === this.state.editedTodoId) {
                item.title = this.state.editedTodoText
            }
            return item;
        });
        this.setState({
            todos: newArray
        });
        this.close()
    }

    close = () => {
        document.getElementById('card-popup-container').style.cssText = "visibility: hidden; opacity: 0;";
        this.setState({
            editedTodoId: 0,
            editedTodoText: ""
        })
    }

    render() {
        let filtered = [];
        if (this.state.filterOption === "all") {
            filtered = this.state.todos;
        } else if (this.state.filterOption === "completed") {
            filtered = this.state.todos.filter(item => item.completed === true)
        } else {
            filtered = this.state.todos.filter(item => item.completed === false)
        }
        return (
            <div className='app'>
                <div className='container'>
                    <Header />
                    <Form
                        addTodo={this.addTodo}
                        changeFilterOption={this.changeFilterOption}
                    />
                    <TodoList
                        todos={filtered}
                        deleteTodo={this.deleteTodo}
                        changeTodoState={this.changeTodoState}
                        showEditFancy={this.showEditFancy}
                    />
                </div>


                <div className='card-popup-container' id="card-popup-container">
                    <div className='card-popup'>
                        <h2>تعديل مهمة</h2>
                        <p className='edit_tite'>لعب رياضة</p>
                        <input type="text" onChange={this.changeEditTodoText} value={this.state.editedTodoText} />
                        <button onClick={this.editTodo}>عدل</button>
                        <button onClick={this.close}>اغلاق</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;