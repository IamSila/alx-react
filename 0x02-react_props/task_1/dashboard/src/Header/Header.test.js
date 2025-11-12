import React from 'react';
import { Configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Header from './Header';
Configure({ adapter: new Adapter() });

describe('Header', () => {
    it('renders without crashing', () => {
        const wrap = Shallow(<Header />);
        expect(wrap).toBeDefined();
        expect(wrap.find('img')).toBeDefined();
        expect(wrap.find('h1')).toBeDefined();
    }); 
});
