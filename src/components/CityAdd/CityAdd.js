import "./CityAdd.css";
import React from "react";

class CityAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(event) {
        if (event.key === "Enter") {
            this.props.addTown(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div className="city-add">
                <input className="city-add-input" type="text" onKeyPress={this.handleEnter}></input>
            </div>
        );
    }
}

export default CityAdd;