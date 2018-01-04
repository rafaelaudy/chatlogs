import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Chatlog, {noAvatarImage} from './Chatlog';

it('renders the avatar', () => {
  const chatlog = shallow(<Chatlog avatar='s' email='' timestamp=''/>);
  expect(chatlog.find('.Chatlog-logo').prop('src')).toBe('s');
});

it('renders empty avatars', () => {
  const chatlog = shallow(<Chatlog avatar='' email='' timestamp=''/>);
  expect(chatlog.find('.Chatlog-logo').prop('src')).toBe(noAvatarImage);
});

it(`renders date in a readable format according to browser's locale`, () => {
  const chatlog = shallow(<Chatlog avatar='' email='' timestamp='2016-03-15T20:24:57Z'/>);
  expect(chatlog.find('.Chatlog-date').text()).toBe('3/15/2016');
});

it('hides the email', () => {
  const chatlog = mount(<Chatlog avatar='' email='e' timestamp=''/>);
  expect(chatlog.find('.Chatlog-email-hidden').length).toBe(1);
});

it('shows the email on hover', () => {
  const chatlog = mount(<Chatlog avatar='' email='e' timestamp=''/>);
  expect(chatlog.find('.Chatlog-email').length).toBe(0);
  expect(chatlog.find('.Chatlog-email-hidden').length).toBe(1);
  chatlog.find('.Chatlog').simulate('mouseEnter');
  expect(chatlog.find('.Chatlog-email').length).toBe(1);
  expect(chatlog.find('.Chatlog-email-hidden').length).toBe(0);
  chatlog.find('.Chatlog').simulate('mouseLeave');
  expect(chatlog.find('.Chatlog-email').length).toBe(0);
  expect(chatlog.find('.Chatlog-email-hidden').length).toBe(1);
});
