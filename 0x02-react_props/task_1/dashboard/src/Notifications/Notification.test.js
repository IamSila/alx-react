import { Configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Notifications from './Notification'

Configure({ Adapter: new Adapter() });

describe('<Notifications />', () => {
    const wrapper = shallow(<Notifications />);
    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });
    it('renders ul', () => {
        expect(wrapper.find('ul')).toBeDefined();
    });
    it('render 3 ul', () => {
        expect(wrapper.find("li")).toHaveLength(3);
    })
    it('renders some text', () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    })
});
