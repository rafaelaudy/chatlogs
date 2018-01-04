import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders the title', () => {
  const app = shallow(<App />);
  expect(app.find('.App-header').exists()).toBeTruthy();
});

it('renders a list of Chatlogs', () => {
  const app = shallow(<App />);
  expect(app.find('Chatlogs').exists()).toBeTruthy();
});
