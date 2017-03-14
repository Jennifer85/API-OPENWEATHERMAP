import "./CityRow.css";
import React from "react";
import Axios from "axios";
import OWM from "../../config";

class CityRow extends React.Component {
    constructor(props) {
        super(props);
        var self = this;
        this.props.request(this.props.town.name, this.props.id);
    }
    render() {
        var t = this.props.town;
        var data = '';
        if (t.data) {
            data = (
                <div>
                    <div className="city-row-data">
                        <p className="city-row-temp">Temperatura: {t.data.main.temp} C.</p>
                        <p className="city-row-desc">descripcion: {t.data.weather[0].descripcion}</p>
                    </div>
                    <div className="city-row-icon">
                        <img src={ "http://openweathermap.org/img/w/" + t.data.weather[0].icon + ".png"}/>
                    </div>
                </div>
            );
        } else {
            data = 'Loading...';
        }
        return (
            <div className="city-row">
                <p className="city-row-town">City: {t.name}</p>
                {data}
            </div>);
    }
}

export default CityRow;