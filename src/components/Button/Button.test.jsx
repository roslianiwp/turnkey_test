import * as React from 'react';
import Button from './Button';
import * as enzyme from 'enzyme';

describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = enzyme.shallow(<Button/>);
    expect(wrapper).toHaveLength(1);
  });
});