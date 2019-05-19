import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        // check if the reducer set the balance
        it('sets a balance', () => {

            // check if the reducer returns the correct value
            expect(balanceReducer(undefined, {
                type: constants.SET_BALANCE,
                balance
            })).toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                // check if the reducer returns the correct value
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
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

    // check if the reducer withdraw from the balance
    it('withdraw from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;

        // check if the reducer returns the correct value
        expect(balanceReducer(initialState, {
            type: constants.WITHDRAW,
            withdrawal
        })).toEqual(initialState - withdrawal);
    });
});