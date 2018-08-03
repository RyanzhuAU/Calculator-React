import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="log" clickHandler={this.handleClick} color="white"/>
                    <Button name="ln" clickHandler={this.handleClick} color="white"/>
                    <Button name="π" clickHandler={this.handleClick} color="white"/>
                    <Button name="e" clickHandler={this.handleClick} color="white"/>
                </div>
                <div>
                    <Button name="AC" clickHandler={this.handleClick} color="white"/>
                    <Button name="^" clickHandler={this.handleClick} color="white"/>
                    <Button name="√x" clickHandler={this.handleClick} color="white"/>
                    <Button name="÷" clickHandler={this.handleClick} color="orange"/>
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button name="x" clickHandler={this.handleClick} color="orange"/>
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button name="-" clickHandler={this.handleClick} color="orange"/>
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button name="+" clickHandler={this.handleClick} color="orange"/>
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} wide/>
                    <Button name="." clickHandler={this.handleClick}/>
                    <Button name="=" clickHandler={this.handleClick} color="orange"/>
                </div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;
