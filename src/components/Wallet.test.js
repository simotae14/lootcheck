import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Wallet from './Wallet';

configure({adapter: new Adapter()});

describe('Wallet', () => {
    // create the shallow version of Wallet
    const wallet = shallow('<Wallet />');

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });
});