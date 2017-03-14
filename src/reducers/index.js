/**
 * Created by  on 29.03.16.
 */
import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

function currentTownReducer(state, action) {

    if (state == undefined) {
        return {
            isLoading: true
        }
    }

    switch (action.type) {
        case types.RECEIVE_TOWN_DATA:
            if (action.idTown != -1) {
                return state;
            }
            return {
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}


function listTownsReducer(state, action) {
    if (state == undefined) {
        var towns = JSON.parse(localStorage.getItem("towns"));
        return {
            towns: towns ? towns : []
        }
    }
    switch (action.type) {
        case types.ADD_TOWN:
            // Push new element
            var newId = state.towns.length;
            var towns = state.towns.concat({name: action.name, id: newId, data: ''});

            // Local save new array
            var savedTowns = [];
            towns.map(function (t) {
                savedTowns.push({name: t.name, id: t.id, data: ''});
            });
            localStorage.setItem("towns", JSON.stringify(savedTowns));
            return {
                towns
            };
        case types.RECEIVE_TOWN_DATA:
            if (action.idTown == -1) {
                return state;
            }
            return {
                towns: state.towns.map(function (town) {
                    if (town.id != action.idTown) {
                        return town;
                    }
                    return Object.assign({}, town, {
                        data: action.data
                    });
                })
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    listTowns: listTownsReducer,
    currentTown: currentTownReducer
});

export default rootReducer;