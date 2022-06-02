import { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
    }

    onChangeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        console.log("render Form");
        return (
            <div>
                <input type="text"
                    placeholder="enter todo"
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
            </div>
        );
    }

}

export default Form;