import { shallow, Configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App'

Configure({ Adapter: new Adapter() });


describe('app component test', () => {
    const wrapper = shallow(<App />);
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });
    it('renders a div with the class App-header', () => { 
        expect(wrapper.find('.App-header')).toBeDefined();
    });
    it('renders a div with the class App-body', () => {
        expect(wrapper.find('.App-body')).toBeDefined();
    });
    it('renders a div with the class App-footer', () => { 
        expect(wrapper.find('.App-footer')).toBeDefined();
    });
});