import "./CityList.css";
import React from "react";
import CityRow from '../CityRow/CityRow';

class CityList extends React.Component {

    render() {
        var self = this;
        var listTowns = this.props.data==undefined ? '' : this.props.data.map(function (town, i) {
            return <CityRow key={i} town={town} id={i} request={self.props.requestDataForTown} />;
        });
        return (
            <div className="city-list">
                {listTowns}
            </div>
        );
    }
}

export default CityList;