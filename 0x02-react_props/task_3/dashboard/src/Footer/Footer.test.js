import React from 'react';
import { Configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Footer from './Footer';
Configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('renders without crashing', () => {
        const wrap = Shallow(<Footer />);
        expect(wrap).toBeDefined();
        expect(wrap.text()).toBe('Copyright');
    }); 
});
