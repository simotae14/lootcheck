import * as constants from './constants';

// action creator setBalance
export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    };
};

// action creator deposit
export const deposit = deposit => {
    return {
        type: constants.DEPOSIT,
        deposit
    };
};