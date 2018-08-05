import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        calculate(this.state, buttonName)
            .then(state => {
                this.setState(state);
                // console.log(state);
            })
    };

    handleKeyPress = event => {
        console.log(event);
        calculate(this.state, event.key)
            .then(state => {
                this.setState(state);
            })
    }

    render() {
        return (
            <div className="component-app" onKeyPress={this.handleKeyPress}>
                <Display value={this.state.next || this.state.total || "0"}/>
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}

export default App;
