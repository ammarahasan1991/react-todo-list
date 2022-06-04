import { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            filterOption: "all"
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    changeFilterOption = (e) => {
        this.setState({
            filterOption: e.target.value
        });
        this.props.changeFilterOption(e.target.value);
    }

    render() {
        return (
            <div className="todo-form">
                <input type="text"
                    placeholder="ادخل نص المهمة هنا"
                    value={this.state.inputText}
                    onChange={this.onChangeHandler}
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter") {
                                if (this.state.inputText !== "") {
                                    this.props.addTodo(this.state.inputText);
                                    this.setState({
                                        inputText: ""
                                    });
                                }
                            }
                        }
                    }
                />
                <select onChange={this.changeFilterOption}>
                    <option value="all">الكل</option>
                    <option value="completed">المكتملة</option>
                    <option value="uncompleted">غير المكتملة</option>
                </select>
            </div>
        );
    }

}

export default Form;