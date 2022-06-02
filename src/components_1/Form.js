import { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            inpuText: '',
        }
    }

    onChangeHandel = (e) => {
        this.setState({
            inpuText: e.target.value
        });
    }

    listOnChangeHandler = (e) => {
        if (e.target.value === "all") {
            this.props.changeFilterValue('all');
            this.props.filterAll();
        } else if (e.target.value === "completed") {
            this.props.changeFilterValue('completed');
            this.props.filterComplete();
        } else {
            this.props.changeFilterValue('uncompleted');
            this.props.filterActive();
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="enter todo" value={this.state.inpuText} onChange={this.onChangeHandel} onKeyDown={
                    (e) => {
                        if (e.key === 'Enter') {
                            this.props.addTodo(this.state.inpuText);
                            this.setState({
                                inpuText: ""
                            })
                        }
                    }
                } />
                <select onChange={this.listOnChangeHandler} defaultValue={this.props.filterValue}>
                    <option value="all" >All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        );
    }
}

export default Form;