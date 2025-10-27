import { Configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TextEncoder, TextDecoder } from 'util';
Configure({ Adapter: new Adapter() });
