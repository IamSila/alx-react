import shallow from "enzyme";
import { Adapter } from "enzyme-adapter-preact-pure";
import App from './App';

describe('App tests', () => {
    it('renders without crashing', () => {
        const component = shallow(<App />);
        expect(component).toBeDefined();
    });
    it('should render a div with the class App-Header', () => {
        const component = shallow(<App />);
        expect(component.find('.App-header')).toBeDefined();
    });
    it('should render a div with the class App-body', () => {
		const component = shallow(<App />);
		expect(component.find('.App-body')).toBeDefined();
    });
    it('should render a div with the class App-footer', () => {
		const component = shallow(<App />);

		expect(component.find('.App-footer')).toBeDefined();
	});
})