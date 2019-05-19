import * as constants from './constants';

// action creator setBalance
export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    };
};