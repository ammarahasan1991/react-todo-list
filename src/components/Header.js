import { Component } from "react";

class Header extends Component {
    render() {
        console.log("render Header");
        return (
            <header className="app-header">
                <h2>قائمة المهام</h2>
            </header>
        );
    }
}

export default Header;