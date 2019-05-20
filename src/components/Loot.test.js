import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Loot } from './Loot';

configure({adapter: new Adapter()});

describe('Loot', () => {
    const loot = shallow(<Loot />);

    it('renders properly', () => {
        expect(toJson(loot)).toMatchSnapshot();
    });
});
