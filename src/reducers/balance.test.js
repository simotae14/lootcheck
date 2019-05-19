import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    // check if the reducer set the balance
    it('sets a balance', () => {
        const balance = 10;

        // check if the reducer returns the correct value
        expect(balanceReducer(undefined, {
            type: constants.SET_BALANCE,
            balance
        })).toEqual(balance);
    });

    // check if the reducer deposit into the balance
    it('deposits into the balance', () => {
        const deposit = 20;
        const initialState = 5;

        // check if the reducer returns the correct value
        expect(balanceReducer(initialState, {
            type: constants.DEPOSIT,
            deposit
        })).toEqual(initialState + deposit);
    });
});