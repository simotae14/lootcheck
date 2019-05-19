import * as constants from './constants';
import * as actions from './balance';

// check if an action creator create an action to set the balance
it('creates an action to set the balance', () => {
    const balance = 0;
    const expectedAction = {
        type: constants.SET_BALANCE,
        balance
    };

    // check if the action creator return the expectedAction
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

// check if an action creator create an action to deposit money
it('creates an action to deposit into the balance', () => {
    const deposit = 10;
    const expectedAction = {
        type: constants.DEPOSIT,
        deposit
    };

    // check if the action creator return the expectedAction
    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

// check if an action creator create an action to withdraw money
it('creates an action to withdraw into the balance', () => {
    const withdraw = 5;
    const expectedAction = {
        type: constants.WITHDRAW,
        withdraw
    };

    // check if the action creator return the expectedAction
    expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});