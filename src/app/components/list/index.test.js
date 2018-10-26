import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { List } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('should contain a list', () => {
        const wrapper = shallow(<List />);
        expect(wrapper.find('ul')).toHaveLength(1);
    });
});