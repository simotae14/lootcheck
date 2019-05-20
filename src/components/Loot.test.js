import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Loot } from './Loot';

configure({adapter: new Adapter()});

describe('Loot', () => {
    // mock fetch
    const mockFetchBitcoin = jest.fn();
    // props
    const props = {
        balance: 10,
        bitcoin: {}
    };
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(toJson(loot)).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

});
