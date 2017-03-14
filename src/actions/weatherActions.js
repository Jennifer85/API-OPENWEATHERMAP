/**
 * Created by  on 29.03.16.
 */
import * as types from '../constants/ActionTypes';
import Axios from 'axios';
import OWM from '../config';

export function addTown(name) {
    return {
        type: types.ADD_TOWN,
        name
    };
}

export function removeTown(id) {
    return {
        type: types.REMOVE_TOWN,
        id
    };
}

export function requestDataForTownByName(name, id) {
    return dispatch => {
        Axios.get(OWM.URL, {
                params: {
                    APPID: OWM.KEY,
                    q: name,
                    lang: 'ru',
                    units : 'metric'
                }
            })
            .then(function (response) {
                dispatch(receiveDataMyTown(response, id));
            })
            .catch(function (response) {
                console.log(response);
            });
    };
}

export function requestDataForTownByCoords(x,y) {
    return dispatch => {
        Axios.get(OWM.URL, {
                params: {
                    APPID: OWM.KEY,
                    lat: x,
                    lon: y,
                    lang: 'ru',
                    units : 'metric'
                }
            })
            .then(function (response) {
                dispatch(receiveDataMyTown(response, -1));
            })
            .catch(function (response) {
                console.log(response);
            });
    }
}



export function receiveDataMyTown(response, idTown) {
    return {
        type: types.RECEIVE_TOWN_DATA,
        data: response.data,
        idTown : idTown
    };
}