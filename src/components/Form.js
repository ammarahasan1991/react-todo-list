import React, { Component } from "react";

class Form extends Component {

    constructor() {
        super();
        this.inputTextHandler = this.inputTextHandler.bind(this);
    }

    inputTextHandler(e) {
        this.props.inputText = e.target.value;
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.props.inputTextHandler} className="todo-input" />
                <button className="todo-button" type="submit">
                    Add
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        );
    }
}

export default Form;