import "./Header.css";
import React from "react";
import Axios from 'axios';
import OWM from '../../config';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var myTown = this.props.myTown;
        if (!myTown) {
            myTown = (
                <div className="header">
                    <p className="header-app"> SPA CLIMA </p>
                    <p className="header-town">Cargando</p>
                </div>
            );
        } else {
            myTown = (
                <div className="header">
                    <p className="header-app"> SPA CLIMA </p>
                    <p className="header-town"> Se encuentra en { myTown.name }</p>
                    <label className="header-Temperatura"> Temperatura { myTown.main.temp } C.  descripcion : { myTown.weather[0].descripcion }</label>
                </div>
            );
        }
        return myTown;
    }
}
export default Header;