import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

configure({adapter: new Adapter()});

describe('App', () => {
    // create the shallow rendering
    const app = shallow(<App />);
    // 1st unit test, renders correctly App
    it('renders correctly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });

    // Chcek if App contains a Wallet component
    it('contains a Wallet component', () => {
        expect(app.find('Wallet').exists()).toBe(true);
    });
});