import React from 'react';
import { Configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Login from './Login';
Configure({ adapter: new Adapter() });

describe('Login', () => {
    it('renders without crashing', () => {
        const wrap = Shallow(<Login />);
        expect(wrap).toBeDefined();
        expect(wrap.find('img')).toHaveLen(2);
        expect(wrap.find('label')).toHaveLen(2);
    }); 
});
