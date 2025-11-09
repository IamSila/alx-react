import React from 'react';
import App from "./App";
import { Configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from "../Notifications/Notification";
Configure({ adapter: new Adapter() });

describe('App', () => {
  const wrap = Shallow(<App />);
  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });
  it('renders Notifications App', () => {
    expect(wrap.contains(<Notifications />)).toBe(true);
  });
  it('renders Login App', () => {
    expect(wrap.contains(<Login />)).toBe(true);
  });
  it('renders Header App', () => {
    expect(wrap.contains(<Header />)).toBe(true);
  });
  it('renders Footer App', () => {
    expect(wrap.contains(<Footer />)).toBe(true);
  });
});
