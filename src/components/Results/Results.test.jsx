import * as React from 'react';
import * as enzyme from 'enzyme';
import Results from './Results';


describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = enzyme.shallow(<Results/>);
    expect(wrapper).toHaveLength(1);
  });
});