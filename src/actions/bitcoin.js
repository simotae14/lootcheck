import { FETCH_BITCOIN } from './constants';

// create the function that retrieve data and dispatch the action
export const fetchBitcoin = () => {
    return dispatch => {
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => dispatch({
                type: FETCH_BITCOIN,
                bitcoin: json
            }));
    };
};