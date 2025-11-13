import { Configure, shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
Configure({ adapter: new Adapter() });


describe('<NotificationItem />', () => {
    const wrapper = shallow(NotificationsItem)
    it('renders without crashing', () => {
    })
})
