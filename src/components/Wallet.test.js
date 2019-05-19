import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Wallet } from './Wallet';

configure({adapter: new Adapter()});

describe('Wallet', () => {
    // props
    const props = {
        balance: 20
    };
    // create the shallow version of Wallet
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
    });
});