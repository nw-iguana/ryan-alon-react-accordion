import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion';


describe('Accordion Component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
    
    it('renders no content paragraph by default', () => {
        const tree = renderer.create(<Accordion sections={sections}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders an empty li when the sections prop is not supplied', () => {
      const tree = renderer.create(<Accordion />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('the component opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections}/>);
        wrapper.find('button').at(1).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('The component only opens the last section when multiple sections have been clicked.', () => {
      const wrapper = shallow(<Accordion sections={sections}/>);
      wrapper.find('button').at(1).simulate('click');
      wrapper.find('button').at(0).simulate('click');
      expect(toJson(wrapper)).toMatchSnapshot();
    })

});