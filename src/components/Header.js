import { Component } from "react";

class Header extends Component {
    render() {
        console.log("render Header");
        return (
            <header>
                <h2>Todo App</h2>
            </header>
        );
    }
}

export default Header;