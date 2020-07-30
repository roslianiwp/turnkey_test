import * as React from 'react';
import * as enzyme from 'enzyme';
import Home from './Home';
import { Provider } from "react-redux";
import store from "../../store";

describe('Hello, Enzyme!', () => {
  it('renders', () => {
    const wrapper = enzyme.shallow(
      <Provider store={store}>
        <Home/>
      </Provider>
      
    );
    expect(wrapper).toHaveLength(1);
  });
});