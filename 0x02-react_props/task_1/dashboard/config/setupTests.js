import { Configure, shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import NotificationsItem from './Notifications'
Configure({ adapter: new Adapter() });


describe('<NotificationItem />', () => {
    const wrapper = shallow(NotificationsItem)
    it('renders without crashing', () => {
        
    })
})