import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Loot } from './Loot';

configure({adapter: new Adapter()});

describe('Loot', () => {
    // props
    let props = { balance: 10, bitcoin: {} };
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(toJson(loot)).toMatchSnapshot();
    });

    describe('when mounted', () => {
        const mockFetchbitcoin = jest.fn();
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });

        describe('when there are valid bitcoin props', () => {
            beforeEach(() => {
                props =  {
                    balance: 10,
                    bitcoin: {
                        bpi: {
                            USD: {
                                rate: '1,000'
                            }
                        }
                    }
                };
                loot = shallow(<Loot {...props} />);
            });

            it('displays the correct bitcoin value', () => {
                expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
            });
        });

    });

});
