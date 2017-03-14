/**
 * Created by  on 29.03.16.
 */
import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as Actions from '../../actions/weatherActions';
import './SPACLIMA.css';

// Components
import Header from '../../components/Header/Header';
import CityList from '../../components/CityList/CityList';
import CityAdd from '../../components/CityAdd/CityAdd';

class SPACLIMA extends React.Component {
    constructor(props) {
        super(props);
        const {actions} = this.props;

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos);
            actions.requestDataForTownByCoords(pos.coords.latitude, pos.coords.longitude);
        });
    }
    render() {
        const { towns, actions, myTown } = this.props;
        return (
            <div className="content">
               <Header myTown={myTown}/>
                <CityAdd addTown={actions.addTown} />
                <CityList data={towns} requestDataForTown={actions.requestDataForTownByName}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    var props = {
        towns : state.listTowns.towns,
        myTown : state.currentTown.data
    };
    return props;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SPACLIMA);
