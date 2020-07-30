import * as React from 'react';
import * as enzyme from 'enzyme';
import Input from './Input';


describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = enzyme.shallow(<Input/>);
    expect(wrapper).toHaveLength(1);
  });
});